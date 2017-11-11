const type = 'project'
const basePath = `/${type}s`

module.exports = {
    getProjects: async function () {
        return this.apiRequest({
            path: `${basePath}`,
        })
    },
    getProject: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
        })
    },
    createProject: async function (data) {
        return this.apiRequest({
            path: `${basePath}`,
            method: 'POST',
            body: {
                [type]: data,
            },
        })
    },
    updateProject: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    deleteProject: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    deleteProjects: async function (ids = []) {
        return this.deleteProject(ids.join(','))
    },
    getProjectUsers: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/project_users`,
        })
    },
    getProjectTasks: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/tasks`,
        })
    },
}
