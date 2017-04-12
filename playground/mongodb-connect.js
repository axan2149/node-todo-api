/**
 * Created by mrozycki on 4/12/2017.
 */


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructuring in ES6 it's same as the line above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    "use strict";
    if (err) {
        return console.log('Unable to connect to mongoDB server',err);
    }
    console.log('Connected to MongoDB server');

    var user = {name: 'Martin', age: 36};
    var {name} = user;


    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    //
    // }, (err, res) =>{
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(res.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //    name: 'Martin',
    //     age: 36,
    //     location: 'New York'
    // }, (err, res) =>{
    //     if (err) {
    //         return console.log('Unable to inser User doc', err);
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
    // });



    db.close();
});