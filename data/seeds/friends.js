exports.seed = async function(knex) {
	await knex("friends").truncate()
	await knex("friends").insert([
		{ name: "nick" },
		{ name: "ben" },
		{ name: "kaylie" },
		{ name: "devon" },
	])
}
