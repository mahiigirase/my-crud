const Employee = require('../Model/Employee')

exports.getEmployee = async (req,res)=>{
    try {
        const employee = await Employee.find()
        res.json({errors:false, data:employee})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.postEmployee = async (req,res)=>{
    try {
        
        const employee = await Employee.create(req.body);
        res.json({errors:false , data:employee})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message});
    }
}

exports.updateEmployee = async (req,res)=>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json({errors:false, data:employee})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.deleteEmployee = async (req,res)=>{
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id)
        res.json({errors:false ,data:employee})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})

    }
}
