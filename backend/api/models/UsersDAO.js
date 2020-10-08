let crypto = require('crypto')
let ObjetcID = require('mongodb').ObjectID

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
                        records: result[0].records
                    }});
                }else {
                    res.status(401).json({error: 'Incorrect email or password'});
                }
            });
            
            mongoclient.close()
        })
    })
}
UsersDAO.prototype.updateRecords = function(user, res){
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("users", function(err, collection){
            collection.update(
                {_id: ObjetcID(user.id)}, //query
                {$set: {records: user.records} }, //set
                {},
                function(err, records){
                    if(err){
                        res.json(err);
                    }
                    
                }
            )
            collection.find({_id: ObjetcID(user.id)}).toArray(function(err,result){
                if(err){
                    res.json(err)
                }
                res.json({user: {
                    _id: result[0]._id,
                    name: result[0].name,
                    email: result[0].email,
                    records: result[0].records
                }})
            })
            
            mongoclient.close()
        })
    })
}

module.exports = function(){
    return UsersDAO
}