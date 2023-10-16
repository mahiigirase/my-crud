const User = require('../Model/User')

exports.getUser = async (req,res)=>{
    try {
        const user = await User.find()
        res.json({errors:false, data:user})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.postUser = async (req,res)=>{
    try {
        
        const user = await User.create(req.body);
        res.json({errors:false , data:user})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message});
    }
}

exports.updateUser = async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json({errors:false, data:user})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.deleteUser = async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json({errors:false, data:user})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})

    }
}
