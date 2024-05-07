const type = 'project_user'
const basePath = `${type}s`

module.exports = {
    createProjectUser: async function (workspaceId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}`,
            method: 'POST',
            body: data,
        })
    },
    updateProjectUser: async function (workspaceId, id, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'PUT',
            body: data,
        })
    },
    updateProjectUsers: async function (workspaceId, ids = [], data) {
        this.updateProjectUser(workspaceId, ids.join(','), data)
    },
    deleteProjectUser: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    deleteProjectUsers: async function (workspaceId, ids = []) {
        return this.deleteProjectUser(workspaceId, ids.join(','))
    },
}
