module.exports = {
    createGroup: async function (data) {
        return this.apiRequest({
            path: `/groups`,
            method: 'POST',
            body: {
                group: data,
            },
        })
    },
    updateGroup: async function (groupId, data) {
        return this.apiRequest({
            path: `/groups/${groupId}`,
            method: 'PUT',
            body: {
                group: data,
            },
        })
    },
    deleteGroup: async function (groupId) {
        return this.apiRequest({
            path: `/groups/${groupId}`,
            method: 'DELETE',
        })
    },
}
