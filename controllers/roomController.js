const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const roomSchema = mongoose.model('room_model');
let room = require('../models/room_model');

router.get('/welcome',(req,res)=>{
   res.render("room/addOrEdit",{
       viewTitle: "Welcome To Stay In Boomerang"
   }); 
});


router.post('/insert',(req,res)=>{
    if(req.body._id == '')
        insertRecord(req,res);
        else
            updateRecord(req,res);
});

function insertRecord(req,res){
    var room = new roomSchema();
    room.fullName = req.body.fullName;
    room.email = req.body.email;
    room.mobile = req.body.mobile;
    room.city = req.body.city;
    room.time = req.body.time;
    room.people = req.body.people;
    room.kids = req.body.kids;
    room.roomtype = req.body.roomtype;
    room.roomnum = req.body.roomnum;
    room.date = req.body.date;
}
/*room.save((err, doc) => {
        if (!err)
            res.redirect('room/list');
        else {
            if (err.name == 'ValidationError') 
            {
                handleValidationError(err, req.body);
                res.render("room/addOrEdit", {
                    viewTitle: "Insert Employee",
                    room: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
});*/


function updateRecord(req, res) {
    roomSchema.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect("room/roomList"); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("room/addOrEdit", {
                    viewTitle: 'Update Employee',
                    room: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/roomList', (req, res) => {
    roomSchema.find((err, docs) => {
        if (!err) {
            res.render("room/roomList", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    roomSchema.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("room/addOrEdit", {
                viewTitle: "Update Employee",
                room: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    roomSchema.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect("/room/roomList");
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;
//router.get('/',(req,res)=>{
  //  res.json('from list');
//});

//module.exports = router;