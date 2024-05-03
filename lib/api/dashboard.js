const basePath = 'dashboard'

module.exports = {
    getDashboard: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
        })
    },
}
