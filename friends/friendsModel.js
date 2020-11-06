const db = require("../data/config")

function find() {
	return db("friends")
}

function findById(id) {
	return db("friends").where({ id }).first()
}

async function create(data) {
	const [id] = await db("friends").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("friends").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("friends").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}
