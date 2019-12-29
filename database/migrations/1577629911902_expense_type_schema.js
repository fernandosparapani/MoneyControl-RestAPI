'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExpenseTypeSchema extends Schema {
  up () {
    this.table('expense_types', (table) => {
      table.dropColumn('operationType')
    })
  }

  down () {
    this.table('expense_types', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ExpenseTypeSchema
