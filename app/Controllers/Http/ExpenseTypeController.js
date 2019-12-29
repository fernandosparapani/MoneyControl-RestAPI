'use strict'

const ExpenseType = use('App/Models/ExpenseType')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with Expensetypes
 */
class ExpenseTypeController {

  async index ({ auth }) {

    const expenseType = await ExpenseType.query().where('user_id', auth.user.id).with('user').fetch()

    return expenseType
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'description'])

    const expenseType = await ExpenseType.create({ ...data, user_id: auth.user.id })

    return expenseType
  }

  async show ({ params }) {

    const expenseType = await ExpenseType.findOrFail(params.id)

    await expenseType.load('user')

    return expenseType
  }

  async update ({ params, request }) {

    const expenseType = await ExpenseType.findOrFail(params.id)
    const data = request.only(['title', 'description'])

    expenseType.merge(data)

    await expenseType.save()

    return expenseType
  }

  async destroy ({ params }) {

    const expenseType = await ExpenseType.findOrFail(params.id)

    await expenseType.delete()
  }
}

module.exports = ExpenseTypeController
