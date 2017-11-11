class Timer {
    constructor ({
        toggl,
        data,
    }) {
        this.toggl = toggl
        this.started = false
    }

    async start (data) {
        if (this.started) {
            throw new Error('Toggl timer was already started')
        }

        const { data: entry } = await this.toggl.startTimeEntry(data)

        this.started = true

        this.entry = entry

        return entry
    }

    async stop () {
        if (!this.started || !this.entry) {
            throw new Error('Toggl timer wasn\'t started yet')
        }

        const { data: entry } = await this.toggl.stopTimeEntry(this.entry.id)

        this.entry = entry
        this.started = false

        return entry
    }

    async update (data) {
        if (!this.started || !this.entry) {
            throw new Error('Toggl timer wasn\'t started yet')
        }

        const { data: entry } = await this.toggl.updateTimeEntry(this.entry.id, data)

        this.entry = entry

        return entry
    }

    async clear () {
        if (this.entry) {
            await this.toggl.deleteTimeEntry(this.entry.id)
            this.started = false
        }
    }
}

module.exports = Timer
