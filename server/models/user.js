/**
 * Created by mrozycki on 4/12/2017.
 */

const mongoose = require('mongoose');

var User = mongoose.model('Users', {
    email: {
        type: String,
        required:true,
        minlength:3,
        trim:true
    }
});

module.exports = {User};
