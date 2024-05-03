const basePath = `time_entries`

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
            path: `/me/${basePath}/${id}`,
        })
    },
    getCurrentTimeEntry: async function () {
        return this.apiRequest({
            path: `/me/${basePath}/current`,
        })
    },
    createTimeEntry: async function (workspaceId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}`,
            method: 'POST',
            body: {
                created_with: 'toggler',
                ...data,
            },
        })
    },
    startTimeEntry: async function (workspaceId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/start`,
            method: 'POST',
            body: {
                created_with: 'toggler',
                ...data,
            },
        })
    },
    stopTimeEntry: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}/stop`,
            method: 'PUT',
        })
    },
    updateTimeEntry: async function (workspaceId, id, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'PUT',
            body: data,
        })
    },
    updateTimeEntries: async function (workspaceId, ids = [], data) {
        return this.updateTimeEntry(workspaceId, ids.join(','), data)
    },
    deleteTimeEntry: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
}
