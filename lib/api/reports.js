module.exports = {
    getWeeklyReport: async function (query = {}) {
        return this.reportApiRequest({
            path: '/weekly',
            qs: {
                user_agent: 'toggler',
                ...query,
            },
        })
    },
    getDetailedReport: async function (query = {}) {
        return this.reportApiRequest({
            path: '/details',
            qs: {
                user_agent: 'toggler',
                ...query,
            },
        })
    },
    getSummaryReport: async function (query = {}) {
        return this.reportApiRequest({
            path: '/summary',
            qs: {
                user_agent: 'toggler',
                ...query,
            },
        })
    },
}
