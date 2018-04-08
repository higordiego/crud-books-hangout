const returnObject = require('./returnObject')
module.exports = Model => {
    return {
        create: (object) => async (res) => {
            try {
                const model = await Model.create(object.body)
                res.status(201).json(model)
            } catch (err) {
                res.status(500).json(err)
            }
        },
        update: (object) => async (res) => {
            try {
                const model = await Model.update(object.where, object.update)
                returnObject.modifyUpdateReturn(model, res)
            } catch (err) {
                res.status(500).json(err)
            }
        },
        delete: (object) => async (res) => {
            try {
                const model = await Model.remove(object.where)
                returnObject.deleteObjectReturn(model, res)
            } catch (err) {
                res.status(500).json(err)
            }
        },
        listAll: (object) => async (res) => {
            try {
                const model = await Model.find(object.where)
                returnObject.listAllReturn(model, res)
            } catch (err) {
                res.status(500).json(err)
            }
        },
        listOne: (object) => async (res) => {
            try {
                const model = await Model.findOne(object.where)
                returnObject.listOne(model, res)
            } catch (err) {
                res.status(500).json(err)
            }
        }
    }
}
