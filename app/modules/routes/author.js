module.exports = app => {
    const url = `${process.env.API_ROUTE}/author`
    const Controller = require('../controllers/author')
    app.route(`${url}`)
        .get(Controller.listAll)
        .post(Controller.create)

    app.route(`${url}/:_id`)
        .get(Controller.listOne)
        .put(Controller.update)
        .delete(Controller.delete)
}
