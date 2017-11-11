const objectKey = 'tasks'
const basePath = `/${objectKey}s`

module.exports = {
    createTask: async function (data) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                [objectKey]: data,
            },
        })
    },
    updateTask: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [objectKey]: data,
            },
        })
    },
    updateTasks: async function (ids = [], data) {
        this.updateTask(ids.join(','), data)
    },
    deleteTask: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    deleteTasks: async function (ids = []) {
        return this.deleteTask(ids.join(','))
    },
}
