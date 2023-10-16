const Teacher = require('../Model/Teacher')
const bcrypt = require('bcrypt')

exports.getTeacher = async (req,res)=>{
    try {
        const teacher = await Teacher.find()
        res.json({errors:false, data:teacher})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.postTeacher = async (req,res)=>{
    try {
              const emailExist = await Teacher.findOne({email:req.body.email})
              if(emailExist) return res.status(400).json({errors:true, message:"Email Already Exist"})


        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const teacher = await Teacher.create(req.body);
        res.json({errors:false , data:teacher})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message});
    }
}

exports.updateTeacher = async (req,res)=>{
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json({errors:false, data:teacher})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
    }
}

exports.deleteTeacher = async (req,res)=>{
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id)
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})

    }
}

exports.login = async (req,res)=>{
    try {
        const teacherExist = await Teacher.findOne({email:req.body.email})
        if(!teacherExist) return res.status(400).json({errors:true, message:"Email Or Password is Invalid..."})
        
     const  validPassword = await bcrypt.compare(req.body.password ,teacherExist.password)
     if(!validPassword ) return res.status(400).json({errors:true, message:"Email Or Password is Invalid..."})
           
     res.json({errors:false ,data:{Teacher:teacherExist}})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})

    }
}