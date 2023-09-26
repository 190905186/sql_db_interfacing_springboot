const express = require("express")
const bodyParser = require("body-parser")

const port = 3000
const app = express()
const api = require('./routes/api')


app.use(bodyParser.json())
app.use(api)

app.listen(port, () => console.log(`started listening on port no : ${port}`))
