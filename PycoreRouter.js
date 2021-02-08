require("dotenv").config()
const Router = require("express").Router()
const axios = require('axios');

// const API_USAGE_CHECK_ENDPOINT = "https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/credit-spent"

const ApiClient = axios.create({
    baseURL: 'https://api.jdoodle.com/v1/execute',
    // headers: { 'X-Auth-Token' : '<some-token>'}
})


const jdoodleSecrets = {
    clientId : process.env.JDOODLE_CLIENT_ID,
    clientSecret : process.env.JDOODLE_CLIENT_SECRET
}

Router.post('/execute', async (req, res) => {
    try {
        const jdoodlePayload = {...req.body, ...jdoodleSecrets}
        console.log("JDOODLE PAYLOAD: ", jdoodlePayload)
        const response = await ApiClient.post('', jdoodlePayload)
        console.log("JDOODLE RESPONSE: ", response)
        console.log("==============================================================")
        res.send(response.data)
    } catch (error) {
        console.log("TRY{}CATCH{} ERROR --> ", error)
    }
})

module.exports = Router