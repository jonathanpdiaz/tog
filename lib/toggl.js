const requestPromise = require('./utils/requestPromise')
const extend = require('./utils/extend')
const makeAuthHeader = require('./utils/makeAuthHeader')
const Timer = require('./timer')

const API_URL = 'https://api.track.toggl.com/api'
const API_VERSION = 8

const API_REPORT_URL = 'https://api.track.toggl.com/reports/api'
const API_REPORT_VERSION = 2

class Toggl {
    constructor ({
        apiToken,
        username,
        password,
    }) {
        this.auth = apiToken
            ? makeAuthHeader(apiToken, 'api_token')
            : makeAuthHeader(username, password)
    }

    async apiRequest ({
        apiUrl = API_URL,
        apiVersion = API_VERSION,
        method = 'GET',
        path,
        qs,
        body,
    } = {}) {
        const uri = `${apiUrl}/v${apiVersion}${encodeURI(path)}`

        const requestOptions = {
            uri,
            headers: {
                Authorization: this.auth,
            },
            method,
            qs,
            body,
            json: true,
        }

        return requestPromise(requestOptions)
    }

    async reportApiRequest (options = {}) {
        return this.apiRequest({
            ...options,
            apiUrl: API_REPORT_URL,
            apiVersion: API_REPORT_VERSION,
        })
    }

    async startTimer (data) {
        const timer = new Timer({ toggl: this })

        await timer.start(data)

        return timer
    }
}

[
    'clients',
    'cors',
    'dashboard',
    'groups',
    'projects',
    'projectUsers',
    'reports',
    'tags',
    'tasks',
    'timeEntries',
    'workspaces',
    'workspaceUsers',
]
    .map(api => require(`./api/${api}`))
    .forEach(methods => extend(Toggl, methods))

module.exports = Toggl
