'use strict'

class UpdateToDo {
  get rules () {
    return {
      editTodo: 'required|min:3'
    }
  }

  get messages(){
    return{
      'editTodo.required': 'The edit ToDo field is required',
      'editTodo.min': 'The edit ToDo field requires at least 3 characters '

    }
  }
}

module.exports = UpdateToDo
