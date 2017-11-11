const type = 'workspace'
const basePath = `/${type}s`

module.exports = {
    getWorkspaces: async function () {
        return this.apiRequest({
            path: `${basePath}`,
        })
    },
    getWorkspace: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
        })
    },
    updateWorkspace: async function (id, data) {
        return this.apiRequest({
            path: `${basePath}/${id}`,
            method: 'PUT',
            body: {
                [type]: data,
            },
        })
    },
    getWorkspaceUsers: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/users`,
        })
    },
    getWorkspaceConnections: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/workspace_user`,
        })
    },
    inviteWorkspaceUsers: async function (id, emails = []) {
        return this.apiRequest({
            path: `${basePath}/${id}/invite`,
            method: 'POST',
            body: {
                emails,
            },
        })
    },
    getWorkspaceClients: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/clients`,
        })
    },
    getWorkspaceProjects: async function (id, {
        active = true,
        actualHours = false,
        onlyTemplates = false,
    }) {
        return this.apiRequest({
            path: `${basePath}/${id}/projects`,
            qs: {
                active,
                actual_hours: actualHours,
                only_templates: onlyTemplates,
            },
        })
    },
    getWorkspaceTasks: async function (id, {
        active = true,
    }) {
        return this.apiRequest({
            path: `${basePath}/${id}/tasks`,
            qs: {
                active,
            },
        })
    },
    getWorkspaceTags: async function (id) {
        return this.apiRequest({
            path: `${basePath}/${id}/tags`,
        })
    },
}
