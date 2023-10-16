const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rollno:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        default:Date.now(),
    }
})

module.exports = mongoose.model('student',studentSchema)