const type = 'project_user'
const basePath = `/${type}s`

module.exports = {
    createProjectUser: async function (data) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                [type]: data,
            },
        })
    },
    updateProjectUser: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    updateProjectUsers: async function (ids = [], data) {
        this.updateProjectUser(ids.join(','), data)
    },
    deleteProjectUser: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    deleteProjectUsers: async function (ids = []) {
        return this.deleteProjectUser(ids.join(','))
    },
}
