const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    salary:{
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

module.exports = mongoose.model('employee',employeeSchema)