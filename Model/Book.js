const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    
})

module.exports = mongoose.model('book',bookSchema)