const mongoose = require('mongoose');
var roomSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    city: {
        type: String,
    },
    days: {
        type: Number,
    },
    time: {
        type: Number,
    },
    people: {
        type: Number,

    },
    kids: {
        type: Number,

    },
    room_type: {
        type: String,
    },
    createdDate: {
        type: Date, 
        default: Date.now 
    }
});
/*roomSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/


module.exports = mongoose.model('room_model', roomSchema);