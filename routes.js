const PATH = './app/modules/routes'
const fs = require('fs')

module.exports = app => {
    fs.readdirSync(PATH)
        .filter(f => !f.startsWith('.'))
        .forEach((el, i) => require(`${PATH}/${el}`)(app))
}
