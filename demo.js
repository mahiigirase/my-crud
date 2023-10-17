const express = require('express')
const mongoose = require('mongoose')
const teacherRoute = require('./Route/teacherRoute');
const studRoute = require('./Route/studRoute')
const userRoute = require('./Route/userRoute')
const employeeRoute = require('./Route/employeeRoute')
const bookRoute = require('./Route/bookRoute')
require('dotenv/config');
const cors = require('cors');

const demo = express()
demo.use(cors())


demo.use(express.json())

//default api
demo.get('/' ,(req,res)=>{
   res.send("this is home")
})

//teacher api 
demo.use('/api/teacher',teacherRoute)

//bookapi
demo.use('/api/book',bookRoute)

//student api 
demo.use('/api/student',studRoute)

//employee api
demo.use('/api/employee',employeeRoute)

//user api 
demo.use('/api/user',userRoute)












demo.listen(process.env.PORT)

async function demoData(){
    try {
        
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected)

    } catch (error) {
        console.log(error.message)
    }
}
demoData()
