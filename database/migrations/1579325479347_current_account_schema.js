'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CurrentAccountSchema extends Schema {
  up () {
    this.create('current_accounts', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE') // Cascade para deletar 
      table.timestamp('due_date').notNullable()
      table.float('value')
      table.string('operation_type', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('current_accounts')
  }
}

module.exports = CurrentAccountSchema
