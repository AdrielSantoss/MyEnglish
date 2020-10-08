module.exports = function(app){
    app.post('/register', function(req, res){
        app.api.controllers.users.register(app, req, res)
    })
    app.post('/login', function(req, res){
        app.api.controllers.users.login(app, req, res)
    })
    app.post('/updateRecords', function(req, res){
        app.api.controllers.users.updateRecords(app, req, res)
    })
}