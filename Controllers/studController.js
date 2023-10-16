const Student = require('../Model/Student')

exports.getStud = async (req,res)=>{
    try {
        const student = await Student.find()
        res.json({errors:false, data:student})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.postStud = async (req,res)=>{
    try {
        
        const student = await Student.create(req.body);
        res.json({errors:false , data:student})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message});
    }
}

exports.updateStud = async (req,res)=>{
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json({errors:false, data:student})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.deleteStud = async (req,res)=>{
    try {
        const student = await Student.findByIdAndDelete(req.params.id)
        res.json({errors:false, data:student})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})

    }
}
