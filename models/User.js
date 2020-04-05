const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name :{
        type : String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, // 스페이스를 없애줌
        unique:1
    },
    password:{
        type: String,
        minlength:50
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    toke: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.export = { User }