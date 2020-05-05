//DEPENDENCIES
var express = require("express");
var candy = require("../models/candy.js");

//create and export router for app
var router = express.Router();

router.get("/", function (req, res) {
    candy.selectAll(function(candy_data){
        // console.log(candy_data);
    
        res.render("index", {candy_data});
    })
})

//devour candy (set devoured state to true)
router.put('/candy/update', function(req,res){
    candy.updateOne(req.body.candy_id, function(result){
        // console.log(result);
        res.redirect('/');
    });
});

//add new candy
router.post('/candy/create', function(req,res){
    candy.insertOne(req.body.candy_name, function(result){
        res.redirect("/");
    })
})

//remove candy from database
router.delete("/api/candy/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            //if the id does not exist, return 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export as router
module.exports = router;