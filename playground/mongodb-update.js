/**
 * Created by mrozycki on 4/12/2017.
 */
const {MongoClient, ObjectID} = require('mongodb'); // destructuring in ES6 it's same as the line above


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    "use strict";
    if (err) {
        return console.log('Unable to connect to mongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58ee64b5bfff7abc14b730f3')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal:false
    }).then( (result) =>{
       console.log(result);
    });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58ee6646bfff7abc14b73193')
    },{
        $set: {
            name: 'Frank'
        },
        $inc:{
            age:1
        }

    },{
        returnOriginal:false
    }).then( (result) =>{
        console.log(result);
    });

    // db.close
});