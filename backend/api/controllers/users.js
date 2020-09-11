module.exports.register = (app, req ,res)=>{
    let data = req.body 

    let connection = app.api.config.database
    let UsersDAO = new app.api.models.UsersDAO(connection)

    UsersDAO.register(data)
}

module.exports.login = (app, req ,res)=>{
    let data = req.body 

    let connection = app.api.config.database
    let UsersDAO = new app.api.models.UsersDAO(connection)

    UsersDAO.login(data, res)
}