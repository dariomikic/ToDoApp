'use strict'

class Register {
  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required|min:6|confirmed'
    }
  }

  get messages(){
    return{
      'email.required': 'The email field is required.',
      'email.email': 'Enter a vaild email adress.',
      'email.unique': 'Email already exists.',
      'password.required': 'The password field is required',
      'password.min': 'The password field must be at least 6 characters',
      'password.confirmed': 'The password fields do not match'

    }
  }
}

module.exports = Register
