const mollusks = require('../controllers/mollusks.js');
module.exports = function(app){

  app.get('/', function(req, res){
  	mollusks.show(req, res)
  });

  app.get('/mollusk/:id', function(req, res){
  	var id = req.params.id;
    mollusks.showOne(req, res, id)
  });

  app.get('/mollusks/new', function(req, res){
  	res.render('newmollusk');
  });

  app.get('/mollusks/:id/edit', function(req, res){
  	var id = req.params.id;
    mollusks.edit(req, res, id)

  });
  
  app.post('/mollusks', function(req, res){
  	mollusks.create(req, res)
  });
  
  app.post('/mollusks/:id', function(req, res){
  	var id=req.params.id;
    mollusks.update(req, res, id)

  });

  app.post('/mollusks/:id/destroy', function(req, res){
  	var id = req.params.id;
    mollusks.destroy(req, res, id)

  });

} 