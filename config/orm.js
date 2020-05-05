//import connection from connection.js file
var connection = require('./connection.js');

//methods
var orm = {
//display all the candy in the database    
    selectAll: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err, result){
            if(err) throw err;
            cb(result)
        })
    },
//update candy to eaten
    updateOne: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result){
            if(err)throw err;
            cb(result);
        })
    },
//create a new candy
    insertOne: function(tableInput, val, cb){
        connection.query('INSERT INTO '+tableInput+" (candy_name) VALUES ('"+val+"');", function(err, result){
            if(err) throw err;
            cb(result);
        })
    },

    // delete some candy from the database
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + tableInput;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            cb(result);
        });
    }
}

// Export the ORM object in module.exports.
module.exports = orm;