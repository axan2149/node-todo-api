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

    // db.collection('Todos').find({
    //     _id: new ObjectID('58ee574180b5370de87f6e2d')
    // }).toArray().then( (docs) => {
    //    console.log('Todos');
    //    console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    db.collection('Todos').find().count().then( (count) => {
        console.log(`Todos count ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    db.collection('Users').find({
        name: 'Martin'
    }).toArray().then( (docs) => {
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

     db.close();
});