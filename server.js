const express = require("express")
const cors = require("cors")
const friendsRouter = require('./friends/friendsRouter')


const server = express()

server.use(cors())
server.use(express.json())

server.use('/friends', friendsRouter)


server.get("/", (req, res) => {
	res.json({
		message: "Ayyy, its up and working!",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


module.exports = server
