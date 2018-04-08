const Error = require('../errors/persistence/error')
module.exports = ({
    modifyUpdateReturn: (object, res) =>
        object.nModified
            ? res.status(200).json(Error.modifyUpdateSuccess)
            : res.status(304).json(),
    deleteObjectReturn: (object, res) =>
        object.n
            ? res.status(200).json(Error.deleteObjectSuccess)
            : res.status(400).json(Error.deleteObjectFail),
    listAllReturn: (object, res) =>
        object.length > 0
            ? res.status(200).json(object)
            : res.status(204).json(),
    listOne: (object, res) =>
        object
            ? res.status(200).json(object)
            : res.status(204).json()
})
