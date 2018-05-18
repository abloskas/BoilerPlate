var mongoose = require('mongoose');
const pets = require('../controllers/pets');


module.exports = function(app){
    app.get("/pets", pets.index);
    app.get("/pets/:id", pets.show);
    app.post("/pets", pets.create);
    app.post("/pets/:id", pets.update);
    app.delete("/pets/:id", pets.destroy);
    }
    