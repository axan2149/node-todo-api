/**
 * Created by mrozycki on 4/12/2017.
 */

var mongoose = require('mongoose');

//mongoose model

var Todo = mongoose.model('Todos', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null,
    }
});

module.exports = {Todo};
