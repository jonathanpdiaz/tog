class Timer {
    constructor ({
        toggl,
        workspaceId,
    }) {
        this.toggl = toggl
        this.started = false
        this.workspaceId = workspaceId
    }

    async start (data) {
        if (this.started) {
            throw new Error('Toggl timer was already started')
        }

        const entry = await this.toggl.startTimeEntry(this.workspaceId, data)

        this.started = true

        this.entry = entry

        return entry
    }

    async stop () {
        if (!this.started || !this.entry) {
            throw new Error('Toggl timer wasn\'t started yet')
        }

        const entry = await this.toggl.stopTimeEntry(this.workspaceId, this.entry.id)

        this.entry = entry
        this.started = false

        return entry
    }

    async update (data) {
        if (!this.started || !this.entry) {
            throw new Error('Toggl timer wasn\'t started yet')
        }

        const entry = await this.toggl.updateTimeEntry(this.workspaceId, this.entry.id, data)

        this.entry = entry

        return entry
    }

    async clear () {
        if (this.entry) {
            await this.toggl.deleteTimeEntry(this.workspaceId, this.entry.id)
            this.started = false
        }
    }
}

module.exports = Timer
