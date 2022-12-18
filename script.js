const express = require("express");
const app = express()
const port = 5500
//const fetch = require("node-fetch")
const path = require("path")
let publicPath = path.resolve(__dirname, "public")
app.use(express.static(publicPath))
app.listen(port, () => console.log(`Listening on port ${port}!`))