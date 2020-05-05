//import orm into candy.js
var orm = require('../config/orm.js');

var candy = {
    // Display all candy in the db.
    selectAll: function(cb){
        orm.selectAll('candy', function(res) {
            cb(res);
        })
    },
    
    //update the candy to devoured
    updateOne: function(id, cb){
        orm.updateOne('candy',id,cb);
    },

    //create new candy in the database
    insertOne: function(name, cb){
        orm.insertOne('candy', name, cb);
    },
    
    //delete some candy from the database
    deleteOne: function(condition, cb) {
        orm.deleteOne('candy', condition, function(res) {
            cb(res);
        });
    }
};

//export as candy
module.exports = candy;