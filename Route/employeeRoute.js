const route = require('express').Router();
const {getEmployee,postEmployee,updateEmployee,deleteEmployee} = require('../Controllers/employeeController')

route.get('/',getEmployee)

route.post('/',postEmployee)
route.put('/:id',updateEmployee)
route.delete('/:id',deleteEmployee)

//route.post('/login',login)
module.exports = route