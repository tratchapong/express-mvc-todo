const express = require('express')
const todoRouter = express.Router()
const todoController = require('../controllers/todoController')

todoRouter.get('/', todoController.getAll )
todoRouter.get('/todoForm', todoController.todoForm)
todoRouter.get('/edit/:id', todoController.editForm)
todoRouter.post('/saveEdit', todoController.saveEdit)
todoRouter.get('/delete/:id', todoController.delete )
todoRouter.get('/:id', todoController.getIndex )
todoRouter.delete('/:id', todoController.delete)
todoRouter.post('/', todoController.add)

module.exports = todoRouter
