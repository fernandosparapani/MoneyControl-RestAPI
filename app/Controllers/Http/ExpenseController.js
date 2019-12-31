'use strict'

const Expense = use('App/Models/Expense')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with Expenses
 */

class ExpenseController {

  async index ({ auth }) {

    const expense = await Expense.query().where('user_id', auth.user.id).with('user').with('movementType').with('expenseType').fetch()
    // const expense = await Expense.query().where('user_id', auth.user.id).fetch()
    return expense

  }

  async store ({ request, auth }) {
  
    const data = request.only(['expense_type_id', 'movement_type_id', 'title', 'value', 'due_date'])

    const expense = await Expense.create({ ...data, user_id: auth.user.id })

    return expense
  
  }

  async multipleStore ({ request, auth }) {

    var moment = require('moment');

    const data = request.only(['expense_type_id', 'movement_type_id', 'title', 'value', 'due_date'])
    const expensesQtd = request.only(['expensesQtd'])
    let dataRequest = { ...data }
    let counter = 0

    while (counter < expensesQtd.expensesQtd) {

      Expense.create({ ...dataRequest, user_id: auth.user.id })

      var due_date = moment(dataRequest.due_date)
      due_date.add('1', 'months')

      dataRequest.due_date = due_date.format("YYYY-MM-DD HH:mm:ss")

      counter += 1

    }

    return dateRequest

  }

  async show ({ params }) {

    const expense = await Expense.findOrFail(params.id)

    await expense.load('user')
    await expense.load('movementType')
    await expense.load('expenseType')

    return expense

  }

  async update ({ params, request }) {

    const expense = await Expense.findOrFail(params.id)
    const data = request.only(['expense_type_id', 'movement_type_id', 'title', 'value', 'due_date'])

    expense.merge(data)

    await expense.save()

    return expense

  }

  async destroy ({ params }) {

    const expense = await Expense.findOrFail(params.id)

    await expense.delete()

  }
}

module.exports = ExpenseController
