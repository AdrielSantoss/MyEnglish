let crypto = require('crypto')

function UsersDAO(connection){
    this._connection = connection()
}

UsersDAO.prototype.register = function(user){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("users", function(err, collection){

            let passwordCrypto = crypto.createHash('md5').update(user.password).digest('hex')
            user.password = passwordCrypto

            collection.insert(user)
            mongoclient.close()
        })
    })
}
UsersDAO.prototype.login = function(user, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("users", function(err, collection){

            let passwordCrypto = crypto.createHash('md5').update(user.password).digest('hex')
            user.password = passwordCrypto

            collection.find(user).toArray(function(err, result){
                
                if(result[0] !== undefined){
                    res.json({user: {
                        _id: result[0]._id,
                        name: result[0].name,
                        email: result[0].email,
                    }});
                }else {
                    res.status(401).json({error: 'Incorrect email or password'});
                }
            });
            
            mongoclient.close()
        })
    })
}

module.exports = function(){
    return UsersDAO
}