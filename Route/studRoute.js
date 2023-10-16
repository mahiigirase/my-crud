const route = require('express').Router();
const {getStud,postStud ,updateStud,deleteStud} = require('../Controllers/studController')

route.get('/',getStud)

route.post('/',postStud)

route.put('/:id',updateStud)

route.delete('/:id',deleteStud)

//route.post('/login',login)

module.exports = route