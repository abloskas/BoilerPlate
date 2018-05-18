const mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3}
}, {timestamp:true});

module.exports = mongoose.model('Item', ItemSchema); 
var Item = mongoose.model('Item');