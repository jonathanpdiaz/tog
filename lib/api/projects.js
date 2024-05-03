const type = 'project'
const basePath = `${type}s`

module.exports = {
    getProjects: async function (workspaceId) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}`,
        })
    },
    getProject: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
        })
    },
    createProject: async function (workspaceId, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}`,
            method: 'POST',
            body: data,
        })
    },
    updateProject: async function (workspaceId, id, data) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'PUT',
            body: data,
        })
    },
    deleteProject: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}`,
            method: 'DELETE',
        })
    },
    deleteProjects: async function (workspaceId, ids = []) {
        return this.deleteProject(workspaceId, ids.join(','))
    },
    getProjectUsers: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}/project_users`,
        })
    },
    getProjectTasks: async function (workspaceId, id) {
        return this.apiRequest({
            path: `/workspaces/${workspaceId}/${basePath}/${id}/tasks`,
        })
    },
}
