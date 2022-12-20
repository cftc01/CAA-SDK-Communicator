require('dotenv').config()
const axios = require('axios')

const express = require('express')
const router = express.Router()

router.get('/getInitializationVector', async (req, res) => {
    console.log("IV Request starting")
    try {
        const cardID = req.body.cardID

        const config = {
            headers: { 
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log("Sending Request")
        axios.get(
          `${process.env.BACKEND_API}/api/cards/${cardID}/offset`,
          config
        ).then((response) => {
            // Required as not automatically set
            res.append('Content-Type', 'application/json')
            res.json(response.data)
        })
        .catch((e) => {
            res.status(500).json({ Error: e })
        })


    } catch (err) {
        res.status(500).json({ Message: err.nmessage })
    }
})

module.exports = router
