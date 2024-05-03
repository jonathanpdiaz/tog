const type = 'tag'
const basePath = `${type}s`

module.exports = {
    createTag: async function (workspaceId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}`,
            method: 'POST',
            body: data,
        })
    },
    updateTag: async function (workspaceId, id, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'PUT',
            body: data,
        })
    },
    deleteTag: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
}
