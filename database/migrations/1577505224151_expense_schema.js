'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpenseSchema extends Schema {
  up () {
    this.create('expenses', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE') // Cascade para deletar 
      table
        .integer('expense_type_id')
        .unsigned()
        .references('id')
        .inTable('expense_types')
        .onUpdate('CASCADE')
        .onDelete('SET NULL') // Cascade para deletar 
      table
        .integer('movement_type_id')
        .unsigned()
        .references('id')
        .inTable('movement_types')
        .onUpdate('CASCADE')
        .onDelete('SET NULL') // Cascade para deletar 
      table.string('title').notNullable()
      table.float('value')
      table.timestamp('due_date').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('expenses')
  }
}

module.exports = ExpenseSchema
