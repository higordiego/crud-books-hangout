module.exports = ({
    modifyUpdateReturn: (object, res) =>
        object.nModified
            ? res.status(200).json({ title: 'Alterado', message: 'Conseguimos Alterar o Seu Registro!' })
            : res.status(304).json(),
    deleteObjectReturn: (object, res) =>
        object.n
            ? res.status(200).json({ title: 'Deletado', message: 'Deletado com Sucesso!' })
            : res.status(400).json({ title: 'Registro', message: 'Não conseguimos deletar o seu registro!' }),
    listAllReturn: (object, res) =>
        object.length > 0
            ? res.status(200).json(object)
            : res.status(204).json(),
    listOne: (object, res) =>
        object
            ? res.status(200).json(object)
            : res.status(204).json()
})
