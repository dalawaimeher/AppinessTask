require('app-module-path').addPath(__dirname);



var nodeServer = require('servers/nodeServer');
var mongo = require('servers/mongoServer');

nodeServer.server;
mongo.mongoConnection();