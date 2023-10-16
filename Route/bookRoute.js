const route = require('express').Router();
const {getBook,postBook,updateBook, deleteBook}= require('../Controllers/bookController')

route.get('/',getBook)

route.post('/',postBook)

route.put('/:id',updateBook)

route.delete('/:id',deleteBook)

// route.post('/login',login)

module.exports = route