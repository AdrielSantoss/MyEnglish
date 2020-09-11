let mongodb = require('mongodb')

let mongoFunc = ()=> {
    let db = new mongodb.Db(
        'myEnglish',
        new mongodb.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    )
    return db
}

module.exports = function(){
    return mongoFunc
}