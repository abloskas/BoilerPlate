const mongoose = require('mongoose');
var Pet = require('../models/pet');

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
        Pet.find({}, buildQueryHandler(res));
    },
  
    create: function(req, res){
       var pet = new Pet({name: req.body.name, type: req.body.type, description: req.body.description, skill_one: req.body.skill_one, skill_two: req.body.skill_two, skill_three: req.body.skill_three});
        pet.save(buildQueryHandler(res));
    },

    update: function(req, res){
        console.log("server side", req.params.id);
        Pet.updateOne({_id: req.params.id}, req.body, { runValidators: true }, buildQueryHandler(res));

    },

    show: function(req, res) {
        Pet.findById({_id: req.params.id}, buildQueryHandler(res));
    },

    destroy: function(req, res){
        Pet.deleteOne({_id: req.params.id}, buildQueryHandler(res));
    }
    
}