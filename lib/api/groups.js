const type = 'group'
const basePath = `${type}s`

module.exports = {
    createGroup: async function (organizationId, data) {
        return this.apiRequest({
            path: `/organization/${organizationId}/${basePath}`,
            method: 'POST',
            body: data,
        })
    },
    updateGroup: async function (organizationId, groupId, data) {
        return this.apiRequest({
            path: `/organization/${organizationId}/${basePath}/${groupId}`,
            method: 'PUT',
            body: data,
        })
    },
    deleteGroup: async function (organizationId, groupId) {
        return this.apiRequest({
            path: `/organization/${organizationId}/${basePath}/${groupId}`,
            method: 'DELETE',
        })
    },
}
