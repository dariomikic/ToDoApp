'use strict'

class StoreToDo {
  get rules () {
    return {
      addTodo: 'required|min:3'
    }
  }

  get messages(){
    return{
      'addTodo.required': 'The add ToDo field is required',
      'addTodo.min': 'The add ToDo field requires at least 3 characters '

    }
  }
}

module.exports = StoreToDo
