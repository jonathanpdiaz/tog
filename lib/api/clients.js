const type = 'client'
const basePath = `${type}s`

module.exports = {
    getClients: async function () {
        return this.apiRequest({
            path: `/me/${basePath}`,
        })
    },
    getClient: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
        })
    },
    createClient: async function (workspaceId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}`,
            method: 'POST',
            body: data,
        })
    },
    updateClient: async function (workspaceId, id, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'PUT',
            body: data,
        })
    },
    deleteClient: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    getClientProjects: async function (workspaceId, id, { active = true }) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}/projects`,
            qs: {
                active,
            },
        })
    },
}
