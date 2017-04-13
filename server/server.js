/**
 * Created by mrozycki on 4/12/2017.
 */

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParse = require('body-parser');

var port = 3000;
var app = express();


app.post('/todo', (req, res) =>{
    "use strict";

});






app.listen(port, () =>{
    "use strict";
    console.log(`Starting server on port: ${port}`);
});

// var newTodo = new Todo({
//     text: 'Call Bill',
//
// });
//
// newTodo.save().then( (doc) =>{
//     "use strict";
//     console.log('Saved todo', doc);
// }, (e) =>{
//     "use strict";
//     console.log('Unable to save todo', e);
// });

//
// var newUser = new User({
//     email: 'axan@gmail.com'
// });
//
// newUser.save().then( (doc) => {
//     "use strict";
//     console.log('Saved user', doc);
// }, (e) => {
//     "use strict";
//     console.log('Unable to save user doc', e);
// });