'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovementTypeSchema extends Schema {
  up () {
    this.table('movement_types', (table) => {
      table.string('operationType')
    })
  }

  down () {
    this.table('movement_types', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MovementTypeSchema
