const type = 'workspace_user'
const basePath = `${type}s`

module.exports = {
    updateWorkspaceUser: async function (workspaceId, id, data) {
        return this.apiRequest({
            path: `/workspace/${workspaceId}/${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    deleteWorkspaceUser: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspace/${workspaceId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
}
