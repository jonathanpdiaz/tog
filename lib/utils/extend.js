module.exports = function extend (klass, actions) {
    Object.keys(actions).forEach(key => {
        klass.prototype[key] = actions[key]
    })
}
