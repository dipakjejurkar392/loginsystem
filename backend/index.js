let express = require('express');
let mongoose = require('mongoose');
let usermodel = require('./indexmodel');
let cors = require('cors');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
let app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/register");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    usermodel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("password incorrect");
                }
            } else {
                res.json('no record');
            }
        });
});

app.post('/register', (req, res) => {
    usermodel.create(req.body)
        .then(users => console.log(users))
        .catch(err => console.log(err));
});

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password" // Replace with your email password or App Password
    }
});

// Forgot Password Route
app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate token
        const token = crypto.randomBytes(32).toString("hex");
        user.resetToken = token;
        user.tokenExpiry = Date.now() + 3600000; // Token valid for 1 hour
        await user.save();

        // Send email
        const resetLink = `http://localhost:4000/reset-password/${token}`;
        await transporter.sendMail({
            to: user.email,
            from: "your-email@gmail.com",
            subject: "Password Reset Request",
            html: `<p>Click <a href='${resetLink}'>here</a> to reset your password.</p>`
        });

        res.json({ message: "Password reset email sent!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(4000, () => {
    console.log('server is running');
});
