const express = require("express")
const cors = require("cors")
const expenses = require("./controllers/budgetingApp.controller")

const app = express()

app.use(cors())
app.use(express.json())

const budgetingController = require("./controllers/budgetingApp.controller.js")

app.use("/api/budgetingApp/", budgetingController)

app.get("/", (req, res) => {
    res.send("Budgeting App Start")
})

app.get("*", (req,res) => [
    res.json({error: "Page not found"})
])

module.exports = app;