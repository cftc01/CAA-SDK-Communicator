const express = require('express')
const app = express()

app.use (express.json())

const api = require('./routes/api')

app.use('/api', api)

// Required so I can connect to it with my phone / any device on the network
app.listen(3080, '0.0.0.0', () => console.log("CAA-SDK Communicator Running on port 3080"))
