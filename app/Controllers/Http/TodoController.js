'use strict'

const Todo=use('App/Models/Todo')

const {validate}= use('Validator')

class TodoController {

  async index ({ request, response, view, auth }) {
    const todos= await Todo
      .query()
      .where('user_id', auth.user.id)
      .fetch()

    return view.render('index', {
      todos: todos.toJSON(),
      name: auth.user.username
    })
  }

  async create ({ request, response, view }) {

  }


  async store ({ request, response, session , auth}) {

    const todo = await Todo.create({
      user_id: auth.user.id,
      title: request.input('addTodo')
    })
    session.flash({successMessage: 'Added to your list!'})
    return response.redirect('back')
  }


  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view, auth}) {
    const todo = await Todo.findOrFail(params.id)

    if(auth.user.id !== todo.user_id){
      return 'You do not have permission to do this'
    }

    return view.render('edit', {todo })
  }


  async update ({ params, request, response, session,auth }) {

    const todo = await Todo.findOrFail(params.id)
    if(auth.user.id !== todo.user_id){
      return 'You do not have permission to do this'
    }
    todo.title = request.input('editTodo')
    todo.completed = request.input('completedCheck') === 'on' ? true : false
    await todo.save()

    session.flash({ successMessage: 'Todo was updated successfully!' })
    return response.route('todos.index')
  }


  async destroy ({ params, request, response, session,auth }) {
    const todo = await Todo.findOrFail(params.id)
    if(auth.user.id !== todo.user_id){
      return 'You do not have permission to do this'
    }
    await todo.delete()

    session.flash({ successMessage: 'Todo was deleted successfully!' })
    return response.redirect('back')
  }
}

module.exports = TodoController
