module.exports = Model => {
    const sha256 = require('crypto-js/sha256')
    return {
        create: object => new Promise((resolve, reject) => {
            try {
                if (object.body.password) object.body.password = sha256(object.body.password)
                resolve(object)
            } catch (err) {
                reject(err)
            }
        })
    }
}
