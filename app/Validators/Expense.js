'use strict'

class Expense {

  get validateAll(){
    return true
  }

  get rules () {
    return {
      movement_type_id: 'required',
      title: 'required',
      value: 'required',
      due_date: 'required'
    }
  }
}

module.exports = Expense
