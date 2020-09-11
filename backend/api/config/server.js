let express = require('express')
let bodyParse = require('body-parser')
let consign = require('consign')
let cors = require('cors')

let app = express()

app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())
app.use(cors())

consign()
.include('./api/config/database.js')
.then('./api/routes')
.then('./api/models')
.then('./api/controllers')
.into(app)

module.exports = app