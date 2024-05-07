const objectKey = 'tasks'
const basePath = `${objectKey}s`

module.exports = {
    createTask: async function (workspaceId, projectId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/projects/${projectId}/${basePath}`,
            method: 'POST',
            body: data,
        })
    },
    updateTask: async function (workspaceId, projectId, id, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/projects/${projectId}/${basePath}/${id}`,
            method: 'PUT',
            body: data,
        })
    },
    updateTasks: async function (workspaceId, projectId, ids = [], data) {
        this.updateTask(workspaceId, projectId, ids.join(','), data)
    },
    deleteTask: async function (workspaceId, projectId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/projects/${projectId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    deleteTasks: async function (workspaceId, projectId, ids = []) {
        return this.deleteTask(workspaceId, projectId, ids.join(','))
    },
}
