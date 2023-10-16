const route = require('express').Router();
const {getUser,postUser,updateUser, deleteUser}= require('../Controllers/userController')

route.get('/',getUser)

route.post('/',postUser)

route.put('/:id',updateUser)

route.delete('/:id',deleteUser)

// route.post('/login',login)

module.exports = route