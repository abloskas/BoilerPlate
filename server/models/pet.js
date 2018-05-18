const mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name must be entered"], minlength: [3, "Name must be at least 3 characters"]},
    type: {type: String, required: [true, "Type must be entered"], minlength: [3, "Type must be at least 3 characters"]},
    description: {type: String, required: [true, "Description must be entered"], minlength: [3, "Description must be at least 3 characters"]},
    skill_one: {type: String, required: false},
    skill_two: {type: String, required: false},
    skill_three: {type: String, required: false}
}, {timestamp:true});

module.exports = mongoose.model('Pet', PetSchema); 
var Pet = mongoose.model('Pet');