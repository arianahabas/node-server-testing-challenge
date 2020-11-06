const supertest = require('supertest')
const server = require('../server')
const db = require('../data/config')


//run the seeds before every single test, so each one can have a fresh start
beforeEach(async () => {
    await db.seed.run()
})

//this is a jest hook that will run after all the tests in this file have run
afterAll(async () => {
    //close the db connection before the test runner ends to prevent any warnings about leaks
    await db.destroy()
})

describe('friends integration tests', () => {
    it('gets a list of friends', async () => {
        const res = await supertest(server).get('/friends')
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.length).toBeGreaterThanOrEqual(4)
        expect(res.body[0].name).toBe('nick')
    })
    it('creates a friend', async () => {
        const res = await supertest(server)
            .post('/friends')
            .send({name: 'ann'})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.name).toBe('ann')
        //make sure the id was generated - we dont know exactly what it will be
        expect(res.body.id).toBeDefined()
    })
    it('deletes a friend', async () => {
      
    })

})