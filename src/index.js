const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Rutas
app.use(require("./routes"))

app.listen(3000)
console.log("Server on port 3000")