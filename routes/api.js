require('dotenv').config()
const axios = require('axios')

const express = require('express')
const router = express.Router()

router.post('/getInitializationVector', async (req, res) => {
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

router.post('/getPlaidLinkToken', async (req, res) => {
    console.log("Plaid Link Token Request starting...")
    try {
        const cardHolderID = req.body.cardHolderID
        const platform = req.body.platform

        const body = {
            platform: platform,
        };

        if (platform.toLowerCase() === 'android') {
            const androidPackage = req.body.androidPackageName
            body.androidPackageName = androidPackage
        }

        const config = {
            headers: { 
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log("Sending Request")
        axios.post(
          `${process.env.BACKEND_API}/api/cardholders/${cardHolderID}/plaidLinkToken`, 
          body,
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
        res.status(500).json({ Message: err.message })
    }
})

router.post('/registerPlaidPublicToken', async (req, res) => {
    console.log("Register Plaid Public Token Request starting...")
    try {
        const cardHolderID = req.body.cardHolderID
        const publicToken = req.body.plaidPublicToken
        const registrationID = req.body.plaidRegistrationId

        const body = {
            plaidPublicToken: publicToken,
            plaidRegistrationId: registrationID
        };

        const config = {
            headers: { 
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log("Sending Request")
        axios.post(
          `${process.env.BACKEND_API}/api/cardholders/${cardHolderID}/registerPlaidPublicToken`, 
          body,
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
        res.status(500).json({ Message: err.message })
    }
})

router.post('/cardholderDetails', async (req, res) => {
    console.log("Cardholder Details Request starting...")
    try {
        const cardHolderID = req.body.cardHolderID

        const config = {
            headers: { 
                'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        console.log("Sending Request")
        axios.get(
          `${process.env.BACKEND_API}/api/cardholders/${cardHolderID}/cardholderDetails`,
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
        res.status(500).json({ Message: err.message })
    }
})

module.exports = router
