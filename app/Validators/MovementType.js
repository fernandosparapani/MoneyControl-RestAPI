'use strict'

class MovementType {

  get validateAll(){
    return true
  }

  get rules () {
    return {
      title: 'required'
    }
  }
}

module.exports = MovementType
