'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Users creation
Route.post('users', 'UserController.store').validator('User')

// Users login
Route.post('sessions', 'SessionController.store')

//Authenticated routes
Route.group(() => {

  // Expenses
  Route.resource('expenses', 'ExpenseController').apiOnly().validator(new Map([[['expenses.store'],['Expense']]]))

  // Multiples Expenses
  Route.post('multexpenses', 'ExpenseController.multipleStore').validator('MultipleExpense')

  //Expense Types
  Route.resource('expensetypes', 'ExpenseTypeController').apiOnly()

  //Movement Types
  Route.resource('movementtypes', 'MovementTypeController').apiOnly().validator(new Map([[['movementtypes.store'],['MovementType']]]))

  //Current Accounts
  Route.resource('currentacounts', 'CurrentAccountController').apiOnly()

}).middleware(['auth'])