var Todo = require('../models/todo')

function index (req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time //we are sending time to the view
  })
}

function show (req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    // Would like to display the number of the todo within the list
    todoNum:
      Todo.getAll().findIndex(todo => todo.id === parseInt(req.params.id)) + 1
  })
}

function newTodo (req, res) {
  res.render('todos/new')
}

function create (req, res) {
  console.log(req.body)
  Todo.create(req.body)
  res.redirect('/todos')
}

function deleteTodo (req, res) {
  Todo.deleteOne(req.params.id) // comes from the id rendered from view in the url (view gets taht from model)
  //http://localhost:3000/todos
  res.redirect('/todos') // if you have a redirection you don't have to have a view
}

function editTodo (req, res) {
  res.render('todos/edit', {
    todo: Todo.getOne(req.params.id)
  })
}

function change (req, res) {
  console.log(req.body)
  Todo.changeOne(req.body, req.params.id)
  res.redirect('/todos')
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit: editTodo,
  change
}
