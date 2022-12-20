const obtainAccessToken = require('./utilities')

let token = {}

token = obtainAccessToken()

const express = require('express')
const app = express()

app.use (express.json())

const api = require('./routes/api')

app.use('/api', api)

// Expose it on the localhost ip so it can be access from other devices on the network
app.listen(3080, '0.0.0.0', () => console.log("CAA-SDK Communicator Running on port 3080"))
