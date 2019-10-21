const mongoose = require('mongoose');
var User = new mongoose.Schema({
    fullName:{
        type: String,  
    },
    email:{
        type: String,
    },
    mobile:{
        type: Number,
    },
    pswd:{
        type: String,
    },
    address1:{
        type: String,   
    },
    address2:{
        type:String,
    },
    city:{
        type: String,
        
    },
    state: {
        type: String,
        
    },
    zip:{
        type:  Number,
        
    },
    Created_date:{
        type: Date,
        default: Date.now
    }, 
});
module.exports = mongoose.model('User', User);  