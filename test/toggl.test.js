/* eslint-disable func-names, prefer-arrow-callback */
/* eslint-env node, mocha */
const { expect } = require('chai')
const { Toggl, Timer } = require('../index')

async function delay (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('Toggl', function () {
    this.timeout(5000)
    this.slow(1000)

    beforeEach(function () {
        this.toggl = new Toggl({
            apiToken: process.env.TOGGL_API_TOKEN,
        })
    })

    it('should return stuff about me', async function () {
        const { data } = await this.toggl.apiRequest({
            path: '/me',
        })

        expect(data.email).to.be.a('string')
    })

    describe('#startTimer', function () {
        it('should return a Timer', async function () {
            const timer = await this.toggl.startTimer({
                description: 'Testing #startTimer',
            })

            expect(timer).to.be.an.instanceof(Timer)

            await timer.clear()
        })

        it('should be updatable', async function () {
            const timer = await this.toggl.startTimer({
                description: 'Testing Timer#update',
            })

            const newDescription = 'Updated Timer#update test'

            await timer.update({
                description: newDescription,
            })

            expect(timer.entry.description).to.equal(newDescription)

            await timer.clear()
        })

        it('should be stoppable', async function () {
            const timer = await this.toggl.startTimer({
                description: 'Testing Timer#stop',
            })

            expect(timer.entry.duration).to.be.lessThan(0)

            await delay(1000)

            await timer.stop()

            expect(timer.entry.duration).to.be.at.least(1)

            await timer.clear()
        })
    })

    describe('Clients', function () {
        it('returns a list of clients', async function () {
            const [client1] = await this.toggl.getClients()

            expect(client1.id).to.be.a('number')
        })

        it('CRUD', async function () {
            const { data: { workspaces } } = await this.toggl.apiRequest({ path: '/me' })
            const { id: wid } = workspaces[0]

            const originalName = 'TEST_CLIENT'
            const updatedName = 'UPDATED_TEST_CLIENT'

            const { data: client } = await this.toggl.createClient({
                wid,
                name: originalName,
            })

            expect(client.name).to.equal(originalName)

            const { data: updatedClient } = await this.toggl.updateClient(client.id, {
                wid,
                name: updatedName,
            })

            expect(updatedClient.name).to.equal(updatedName)

            await this.toggl.deleteClient(client.id)
        })
    })

    describe('Reports', function () {
        beforeEach(async function () {
            const { data: { workspaces } } = await this.toggl.apiRequest({ path: '/me' })
            const { id: workspaceId } = workspaces[0]

            this.wid = workspaceId
        })

        afterEach(async function () {
            await delay(1000) // Rate limit
        })

        it('returns a weekly report', async function () {
            const {
                total_grand,
                data: entries,
            } = await this.toggl.getWeeklyReport({
                workspace_id: this.wid,
            })

            expect(total_grand).to.be.a('number')
            expect(entries).to.be.an('array')
        })

        it('returns a detailed report', async function () {
            const {
                total_grand,
                total_count,
                per_page,
                data: entries,
            } = await this.toggl.getDetailedReport({
                workspace_id: this.wid,
            })

            expect(total_grand).to.be.a('number')
            expect(total_count).to.be.a('number')
            expect(per_page).to.be.a('number')
            expect(entries).to.be.an('array')
        })

        it('returns a summary report', async function () {
            const {
                total_grand,
                data,
            } = await this.toggl.getSummaryReport({
                workspace_id: this.wid,
                grouping: 'projects',
            })

            expect(total_grand).to.be.a('number')
            expect(data[0].title.project).to.be.a('string')
            expect(data[0].items[0].time).to.be.a('number')
        })
    })
})
