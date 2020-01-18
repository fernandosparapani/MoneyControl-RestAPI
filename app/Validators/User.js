'use strict'

const Antl = use('Antl')

class User {

  get validateAll(){
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed' // "password_confirmation": "password"
    }
  }

  get messages () {
    return Antl.list('validation')
  }

}

module.exports = User
