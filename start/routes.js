'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store')

Route.post('sessions', 'SessionController.store')


Route.group(() => {

  // Expenses
  Route.resource('expenses', 'ExpenseController').apiOnly()
  Route.resource('expensetypes', 'ExpenseTypeController').apiOnly()

}).middleware(['auth'])