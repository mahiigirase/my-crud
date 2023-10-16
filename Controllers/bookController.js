const Book = require('../Model/Book')

exports.getBook = async (req,res)=>{
    try {
        const book = await Book.find()
        res.json({errors:false, data:book})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.postBook = async (req,res)=>{
    try {
        
        const book = await Book.create(req.body);
        res.json({errors:false , data:book})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message});
    }
}

exports.updateBook = async (req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json({errors:false, data:book})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.deleteBook = async (req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        res.json({errors:false, data:book})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})

    }
}
