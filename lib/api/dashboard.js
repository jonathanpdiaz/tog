const basePath = '/dashboard'

module.exports = {
    getDashboard: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
        })
    },
}
