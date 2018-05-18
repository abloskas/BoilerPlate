var mongoose = require('mongoose');
const items = require('../controllers/items');


module.exports = function(app){
    app.get("/items", items.index);
    app.get("/items/:id", items.show);
    app.post("/items", items.create);
    app.post("/items/:id", items.update);
    app.delete("/items/:id", items.destroy);
    }
    