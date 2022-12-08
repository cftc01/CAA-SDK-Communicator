const express = require('express')
const app = express()

app.use (express.json())

const api = require('./routes/api')

app.use('/api', api)

app.listen(3080, () => console.log("CAA-SDK Communicator Running on port 3080"))
