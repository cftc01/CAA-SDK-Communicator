const getAccessToken = require('./getAccessToken.js')

const obtainAccessToken = async (token) => {
  if (!token) {
    const newToken = await getAccessToken()
    return newToken
  } else {
    return token
  }
}

module.exports = obtainAccessToken
