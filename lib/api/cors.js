const basePath = `/me/cors`

module.exports = {
    getCorsEntries: async function () {
        return this.apiRequest({
            path: `${basePath}`,
        })
    },
    createCorsEntry: async function (domain) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                domain,
            },
        })
    },
    deleteCorsEnry: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
}
