

const config   = require('config'),
    mongoose = require('mongoose'),
    log = require('logger/logger');


/**
 * Create mongo connection
 */

exports.mongoConnection =  () => {
    let connection_uri = '';
    if(config.database.mongo.username && config.database.mongo.password) {
        connection_uri = `mongodb://${config.database.mongo.username}:${config.database.mongo.password}@${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.name}?authSource=admin`;
    
    } else {
        connection_uri = `mongodb://${config.database.mongo.host}:${config.database.mongo.port}/${config.database.mongo.name}`;
        
    }
    
    mongoose.Promise = global.Promise;

    mongoose.connect(connection_uri, { useMongoClient: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000 });

    mongoose.connection.on('connected', () => {
       
    });

    mongoose.connection.on('error', (err) => {
        log.info('Mongoose default connection error: ' + err);
    });


    mongoose.connection.on('disconnected', () => {
        log.info('Mongoose default connection disconnected');
    });


    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            log.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};


