'use strict'

const MovementType = use('App/Models/MovementType')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with movementtypes
 */
class MovementTypeController {

  async index ({ auth }) {

    const movementType = await MovementType.query().where('user_id', auth.user.id).with('user').fetch()

    return movementType

  }

  async store ({ request, auth }) {

    const data = request.only(['title', 'description', 'operationType'])

    const movementType = await MovementType.create({ ...data, user_id: auth.user.id })

    return movementType

  }

  async show ({ params }) {

    const movementType = await MovementType.findOrFail(params.id)

    await movementType.load('user')

    return movementType

  }

  async update ({ params, request }) {

    const movementType = await MovementType.findOrFail(params.id)
    const data = request.only(['title', 'description', 'operationType'])

    movementType.merge(data)

    await movementType.save()

    return movementType

  }

  async destroy ({ params }) {

    const movementType = await MovementType.findOrFail(params.id)

    await movementType.delete()

  }
}

module.exports = MovementTypeController
