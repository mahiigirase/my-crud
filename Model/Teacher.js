const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        default:Date.now(),
    }
})

module.exports = mongoose.model('teacher',teacherSchema)