'use strict'


const User = use('App/Models/User')



/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with registers
 */
class RegisterController {

  async index ({ request, response, view }) {
  }


  async create ({ request, response, view }) {
    return view.render('register')
  }


  async store ({ request, response, session }) {

    const user = await User.create({
      username: request.input('email'),
      email: request.input('email'),
      password: request.input('password')
    })

    session.flash({successMessage: 'You have registerd successfully!'})
    return response.redirect('/login')
  }


  async show ({ params, request, response, view }) {
  }


  async edit ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = RegisterController
