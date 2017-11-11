const type = 'group'
const basePath = `/${type}s`

module.exports = {
    createGroup: async function (data) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                [type]: data,
            },
        })
    },
    updateGroup: async function (groupId, data) {
        return this.apiRequest({
            path: `${basePath}/${groupId}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    deleteGroup: async function (groupId) {
        return this.apiRequest({
            path: `${basePath}/${groupId}`,
            method: 'DELETE',
        })
    },
}
