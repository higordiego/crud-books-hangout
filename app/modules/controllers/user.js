const User = require('../models/user')

module.exports = ({
    create: async (req, res) => {
        try {
            const save = await User.create(req.body)
            res.status(201).json(save)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
            const update = await User.update({_id: req.params._id}, req.body)
            update.nModified
                ? res.status(200).json({title: 'Alterado', message: 'Conseguimos Alterar o Seu Registro!'})
                : res.status(304).json()
        } catch (err) {
            res.status(500).json(err)
        }
    },
    listOne: async (req, res) => {
        try {
            const listOne = await User.findOne({_id: req.params._id})
            listOne
                ? res.status(200).json(listOne)
                : res.status(204).json()
        } catch (err) {
            res.status(500).json(err)
        }
    },
    listAll: async (req, res) => {
        try {
            const listAll = await User.find({})
            listAll.length > 0
                ? res.status(200).json(listAll)
                : res.status(204).json()
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const deleteUser = await User.remove({_id: req.params._id})
            deleteUser.n
                ? res.status(200).json({title: 'Deletado', message: 'Deletado com Sucesso!'})
                : res.status(400).json({title: 'Registro', message: 'Não conseguimos deletar o seu registro!'})
        } catch (err) {
            res.status(500).json(err)
        }
    }
})