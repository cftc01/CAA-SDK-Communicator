require('dotenv').config()
const axios = require('axios')
const FormData = require('form-data')

const authConfig = require('./authConfig.json')

const getAccessToken = async () => {
    var bodyFormData = new FormData();
    bodyFormData.append('Username', authConfig.Username)
    bodyFormData.append('Password', authConfig.Password)
    axios({
        method: "post",
        url: `${process.env.BACKEND_API}/api/token` ,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
        if (response.data.access_token) {
            process.env.ACCESS_TOKEN = response.data.access_token
            console.log(("Access Token obtained."))
            return 
    } else {
        console.log("Access Token Error please try again.")
        return
      }
    })
    .catch((e) => {
        console.log(e)
    //   res.status(e.response.status)
    //   res.send()
    })
}

module.exports = getAccessToken
