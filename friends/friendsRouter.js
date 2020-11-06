const express = require("express")
const Friends = require("./friendsModel")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Friends.find())
	} catch(err) {
		next(err)
	}
})

router.post('/', async (req ,res, next) => {
	try{
		const friend = await Friends.create(req.body)
		res.status(201).json(friend)
	} catch(err) {
		next(err)
	}
})

router.delete.

module.exports = router