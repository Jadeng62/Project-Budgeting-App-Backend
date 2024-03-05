const express = require("express")

const expenses = express.Router()
const budgetedExpenses = require("../models/budgetingApp.model.js")

expenses.get("/", (req, res) => {
    res.send({transactions: budgetedExpenses})
})

expenses.get("/:transactionId", (req, res) => {
    const {transactionId} = req.params;
    const expense = budgetedExpenses.find((expense) => expense.id === +transactionId)

    if (expense) {
        res.json(expense)
    } else {
        res.status(404).json({error: "Transaction not found"})
    }
})

expenses.post('/', (req, res) => {
     const lastExpense = budgetedExpenses[budgetedExpenses.length -1]
     const newID = lastExpense ? lastExpense.id + 1 : 1;
    
      req.body.id = newID;
      budgetedExpenses.push(req.body)
      res.json({Transactions:budgetedExpenses})
 })

 
    
    module.exports = expenses;