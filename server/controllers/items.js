const mongoose = require('mongoose');
var Item = require('../models/item');

function buildQueryHandler(res) {
    return function(err, result) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: result
            });
        }
    }
}

module.exports = {

    index: function(req, res){
        Item.find({}, buildQueryHandler(res));
    },
  
    create: function(req, res){
       var item = new Item({name: req.body.name}
        );
        item.save(buildQueryHandler(res));
    },

    update: function(req, res){
        console.log("server side", req.params.id);
        Item.updateOne({_id: req.params.id}, req.body, buildQueryHandler(res));

    },

    show: function(req, res) {
        Item.findById({_id: req.params.id}, buildQueryHandler(res));
    },

    destroy: function(req, res){
        Item.deleteOne({_id: req.params.id}, buildQueryHandler(res));
    }
    
}