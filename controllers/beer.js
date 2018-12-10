// Load required packages
var Beer = require('../models/beer');

// GET endpoint /api/beers
exports.getBeers = function(req, res) {
    
    Beer.find(function(err, beers) {
      if (err)
        res.send(err);
  
      res.json(beers);
    });
  };

// POST Endpoint /api/beers
exports.postBeers = function(req, res) {
  
  var beer = new Beer();

  beer.name = req.body.name;
  beer.type = req.body.type;
  beer.quantity = req.body.quantity;

  beer.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Beer added to the locker!', data: beer });
  });
};

// GET endpoint /api/beers/:beer_id
exports.getBeer = function(req, res) {
    
    Beer.findById(req.params.beer_id, function(err, beer) {
      if (err)
        res.send(err);
  
      res.json(beer);
    });
  };
  
  // PUT endpoint /api/beers/:beer_id
  exports.putBeer = function(req, res) {

    Beer.findById(req.params.beer_id, function(err, beer) {
      if (err)
        res.send(err);
  
      beer.quantity = req.body.quantity;
  
      beer.save(function(err) {
        if (err)
          res.send(err);
  
        res.json(beer);
      });
    });
  };
  
  // DELETE endpoint /api/beers/:beer_id
  exports.deleteBeer = function(req, res) {
    
    Beer.findByIdAndRemove(req.params.beer_id, function(err) {
      if (err)
        res.send(err);
  
      res.json({ message: 'Beer removed from the locker!' });
    });
  };