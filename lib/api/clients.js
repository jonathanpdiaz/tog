const type = 'client'
const basePath = `/${type}s`

module.exports = {
    getClients: async function () {
        return this.apiRequest({
            path: `${basePath}`,
        })
    },
    getClient: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
        })
    },
    createClient: async function (data) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                [type]: data,
            },
        })
    },
    updateClient: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    deleteClient: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    getClientProjects: async function (id, { active = true }) {
        return this.apiRequest({
            path: `${basePath}/${id}/projects`,
            qs: {
                active,
            },
        })
    },
}
