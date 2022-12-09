require('dotenv').config()

const express = require('express')
const router = express.Router()

router.get('/getInitializationVector', async (req, res) => {
    try {
        const cardID = req.body.cardID
        //
        // - Make call to cascade api to get IV VID
        // - Respond with IV VID
        // -

        // Seems to be required as it isn't automatically setting it
        res.append('Content-Type', 'application/json')

        res.json({
        "offset": "xxxxxxxx",
        "offsetID": "xxxxxxxx"
        })
    } catch (err) {
        res.status(500).json({ nessage: err.nmessage })
    }
})

module.exports = router
