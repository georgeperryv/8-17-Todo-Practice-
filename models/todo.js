// The ids can be generated using:
// Date.now() % 1000000
const todos = [
  { id: 125223, todo: 'Feed Dogs', done: true },
  { id: 127904, todo: 'Learn Express', done: false },
  { id: 139608, todo: 'Buy Milk', done: false }
]

function getOne (id) {
  // Use the Array.prototype.find iterator method
  return todos.find(todo => todo.id === parseInt(id))
}

function getAll () {
  return todos
}

function create (candy) {
  //candy rep the whole object being passed in - is essentially the object name
  candy.id = Date.now() % 1000000 //creating new key value pairs in the object passed in
  candy.done = false
  console.log(candy)
  todos.push(candy)
}

function deleteOne (id) {
  const idx = todos.findIndex(todo => todo.id === parseInt(id))
  todos.splice(idx, 1)
}

function change (id) {
  return todos.find(todo => todo.id === parseInt(id))
}

function changeOne (body, id) {
  let correctObject = todos.find(todo => todo.id === parseInt(id))
  correctObject.todo = body.cash
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  changeOne
}
