const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
let usermodel= mongoose.model('user',userSchema)
module.exports=usermodel