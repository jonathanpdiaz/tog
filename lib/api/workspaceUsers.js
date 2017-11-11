const type = 'workspace_user'
const basePath = `/${type}s`

module.exports = {
    updateWorkspaceUser: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    deleteWorkspaceUser: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
}
