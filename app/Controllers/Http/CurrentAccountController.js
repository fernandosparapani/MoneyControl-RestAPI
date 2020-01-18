'use strict'

const CurrentAccount = use('App/Models/CurrentAccount')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CurrentAccountController {

  async index ({ auth }) {

    const currentAccount = await CurrentAccount.query().where('user_id', auth.user.id).with('user').fetch()

    return currentAccount

  }

  async store ({ request, auth }) {

    const data = request.only(['due_date', 'value', 'operation_type'])

    const currentAccount = await CurrentAccount.create({ ...data, user_id: auth.user.id })

    return currentAccount
  }

  async show ({ params }) {

    const currentAccount = await CurrentAccount.findOrFail(params.id)

    await currentAccount.load('user')

    return currentAccount
  }

  async update ({ params, request }) {

    const currentAccount = await CurrentAccount.findOrFail(params.id)
    const data = request.only(['due_date', 'value', 'operation_type'])

    currentAccount.merge(data)

    await currentAccount.save()

    return currentAccount

  }

  async destroy ({ params }) {

    const currentAccount = await CurrentAccount.findOrFail(params.id)

    await currentAccount.delete()

  }

}

module.exports = CurrentAccountController
