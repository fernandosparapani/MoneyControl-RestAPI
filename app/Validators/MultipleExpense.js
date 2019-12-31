'use strict'

class MultipleExpense {

  get validateAll(){
    return true
  }

  get rules () {
    return {
      movement_type_id: 'required',
      title: 'required',
      value: 'required',
      due_date: 'required',
      expensesQtd: 'required'
    }
  }
}

module.exports = MultipleExpense
