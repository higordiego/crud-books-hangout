const User = require('../models/user')
const Persistence = require('../../helpers/persistence')(User)
const Business = require('../business/user')(User)
module.exports = ({
    create: async (req, res) => {
        const object = await Business.create(req)
        Persistence.create(object)(res)
    },
    update: async (req, res) => {
        const object = await Business.create(req)
        Persistence.update({where: req.params, update: object})(res)
    },
    listOne: (req, res) => Persistence.listOne({where: req.params})(res),
    listAll: (req, res) => Persistence.listAll({where: {}})(res),
    delete: (req, res) => Persistence.delete({where: req.params})(res)
})
