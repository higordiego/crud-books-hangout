const Author = require('../models/author')
const Persistence = require('../../helpers/persistence')(Author)
module.exports = ({
    create: (req, res) => Persistence.create(req)(res),
    update: (req, res) => Persistence.update({where: req.params, update: req.body})(res),
    listOne: (req, res) => Persistence.listOne({where: req.params})(res),
    listAll: (req, res) => Persistence.listAll({where: {}})(res),
    delete: (req, res) => Persistence.delete({where: req.params})(res)
})
