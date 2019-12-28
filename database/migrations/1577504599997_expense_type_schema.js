'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpenseTypeSchema extends Schema {
  up () {
    this.create('expense_types', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL') // Cascade para deletar 
    table.string('title').notNullable()
    table.string('description')
    table.string('operationType').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('expense_types')
  }
}

module.exports = ExpenseTypeSchema
