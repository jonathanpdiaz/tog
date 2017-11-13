const request = require('request')

function requestPromise (options) {
    return new Promise((resolve, reject) => {
        function callback (err, response, body) {
            if (err) {
                reject(err)
                return
            }

            const is2xx = /^2/.test(`${response.statusCode}`)

            if (is2xx) {
                resolve(body)
                return
            }

            let errorMessage

            switch (response.statusCode) {
            case 403: {
                errorMessage = 'You don\'t have the right permissions'
                break
            }
            default: {
                errorMessage = (body && body.error && body.error.message) || body
            }
            }

            const error = new Error(errorMessage)
            error.code = response.statusCode
            reject(error)
        }
        request(options, callback)
    })
}

module.exports = requestPromise
