'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Expense extends Model {

    user () {
        return this.belongsTo('App/Models/User')
    }

    expenseType () {
        return this.belongsTo('App/Models/ExpenseType')
    }

    movementType () {
        return this.belongsTo('App/Models/MovementType')
    }

}

module.exports = Expense
