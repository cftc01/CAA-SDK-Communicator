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

        // Seems to be required to have the content type set properly
        res.append('Content-Type', 'application/json')

        res.json({
            "offset": "GBUg9eCr6iNFYJIZEj2d/A==",
            "offsetID": "4A6D3584-23CF-4661-91BF-91267E5DE1AF"
        })
    } catch (err) {
        res.status(500).json({ nessage: err.nmessage })
    }
})

module.exports = router
