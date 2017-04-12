/**
 * Created by mrozycki on 4/12/2017.
 */

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    "use strict";
    if (err) {
        return console.log('Unable to connect to mongoDB server',err);
    }
    console.log('Connected to MongoDB server');


    // deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })
    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });


    db.collection('Users').deleteMany({name:'Martin'}).then((result) => {
       console.log(result);
    });
    db.collection('Users').findOneAndDelete({_id: new ObjectID('58ee5a36d2afb92610054a83')}).then((res) =>{
        console.log(res);
    });
    // db.close();
});