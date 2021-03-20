const moongose = require('mongoose');

class Database {
    constructor() {
        this.mongo();
    }

    mongo() {

        this.mongoConnection = moongose.connect(
            'mongodb://localhost:27017/cyclepayments',
            { useNewUrlParser:true, useUnifiedTopology: true }
        )
        .catch(error => handleError(error));
    }
}

module.exports = new Database();