const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// app.use("/api/budgetingApp/", null)

app.get("/", (req, res) => {
    res.send("Budgeting App Start")
})

app.get("*", (req,res) => [
    res.json({error: "Page not found"})
])

module.exports = app;