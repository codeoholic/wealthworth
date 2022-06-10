const express = require("express")
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()

const application = express()

application.use(cors())
application.use(express.json())

application.use(function( request, response ) {

	return response.status(405).json({ message: 'invalid request', status: 405 })

})

application.use(function( error, request, response, next ) {

	return response.status(500).json({ error: error, status: 500 })

})

application.listen(process.env.PORT, () => {

	console.log(`Application ${process.pid} started on port ${ process.env.PORT }.`)

})

module.exports = application
