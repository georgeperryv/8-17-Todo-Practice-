var express = require('express')
var router = express.Router()
var todosCtrl = require('../controllers/todos')

router.get('/', todosCtrl.index)
//have to have all concrete urls before your dynamic ones "i.e. :id"
router.get('/new', todosCtrl.new)
//http://localhost:3000/todos/127904
router.get('/:id', todosCtrl.show)

router.get('/:id/edit', todosCtrl.edit)

router.post('/', todosCtrl.create)

router.delete('/:id', todosCtrl.delete) //express already knows that if the method is delete it will go to that particular router

router.put('/:id', todosCtrl.change)

module.exports = router
