'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MovementTypeSchema extends Schema {
  up () {
    this.create('movement_types', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('title').notNullable()
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('movement_types')
  }
}

module.exports = MovementTypeSchema
