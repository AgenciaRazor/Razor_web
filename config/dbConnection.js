// Importar mongodb
var mongo = require('mongodb');

var connMongoDB = function(){

   // console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'zsalao',
        new mongo.Server(
            'localhost', // Endereço do servidor
            27017, // porta de conexão
            {}  //
        ),
        {}

    );
    return db;
}

module.exports = function(){
    return connMongoDB;
}


///const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
 
// Connection URL
//const url = 'mongodb://localhost:27017';
 
// Database Name
//const dbName = 'myproject';
 
// Use connect method to connect to the server
//MongoClient.connect(url, function(err, client) {
// assert.equal(null, err);
//  console.log("Connected successfully to server");
 
 // const db = client.db(dbName);
 
//  client.close();
//});

