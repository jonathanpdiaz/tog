const type = 'time_entry'
const basePath = `/time_entries`

module.exports = {
    getTimeEntries: async function ({
        startDate,
        endDate,
    }) {
        return this.apiRequest({
            path: `${basePath}`,
            qs: {
                start_date: startDate,
                end_date: endDate,
            },
        })
    },
    getTimeEntry: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
        })
    },
    getCurrentTimeEntry: async function () {
        return this.apiRequest({
            path: `${basePath}/current`,
        })
    },
    createTimeEntry: async function (data) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                [type]: {
                    created_with: 'toggler',
                    ...data,
                },
            },
        })
    },
    startTimeEntry: async function (data) {
        return this.apiRequest({
            path: `${basePath}/start`,
            method: 'POST',
            body: {
                [type]: {
                    created_with: 'toggler',
                    ...data,
                },
            },
        })
    },
    stopTimeEntry: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/stop`,
            method: 'PUT',
        })
    },
    updateTimeEntry: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    updateTimeEntries: async function (ids = [], data) {
        return this.updateTimeEntry(ids.join(','), data)
    },
    deleteTimeEntry: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
}
