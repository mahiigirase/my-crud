const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
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

module.exports = mongoose.model('user',userSchema)