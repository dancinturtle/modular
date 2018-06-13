var mongoose = require('mongoose');
var Mollusk = mongoose.model('Mollusk');
module.exports = {

  show: function(req,res){
    var squad = [];
  	var octopi = [];
  	var cuttles = [];
  	var nautili = [];
  	var clamsies = [];
  	var musselies = [];
  	var sluggies = [];
  	var snailsies = [];
  	var othersies = [];
  	Mollusk.find({}, function(err, mollusks){

  		for(mollusk in mollusks){
  			if(mollusks[mollusk].common_name == "squid"){
  				squad.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "octopus"){
  				octopi.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "cuttlefish"){
  				cuttles.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "nautilus"){
  				nautili.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "clam"){
  				clamsies.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "mussel"){
  				musselies.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "slug"){
  				sluggies.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "snail"){
  				snailsies.push(mollusks[mollusk]);
  			}
  			if(mollusks[mollusk].common_name == "other"){
  				othersies.push(mollusks[mollusk]);
  			}
  		}//closes for mollusk in mollusks
  		console.log("Here they are!", mollusks);
  		console.log("Oopsies", err);
  		res.render('index', {squad: squad,
  							octopi: octopi,
  							cuttlefish: cuttles,
  							nautili: nautili,
  							clams: clamsies,
  							mussels: musselies,
  							slugs: sluggies,
  							snails: snailsies,
  							others: othersies
  		});//closes res.render
  	});//closes Mollusk.find
  },//closes show: function(req, res)
  showOne: function(req, res, id){
    Mollusk.find({_id: id}, function(err, mollusk){
      console.log("One mollusk", mollusk);
      res.render('mollusk', {response: mollusk});

    }); //closes Mollusk.find

  },//closes showOne: function(req, res, id)
  edit: function(req, res, id){
    Mollusk.find({_id: id}, function(err, mollusk){
  		console.log("One mollusk", mollusk);
  		res.render('editmollusk', {response: mollusk});
  	});//closes Mollusk.find
  }, //closes edit: function(req, res, id)

  create: function(req, res){
    console.log("POST DATA", req.body);
  	var mollusk = new Mollusk({name: req.body.name,
  							common_name: req.body.common_name,
  							other_common_name: req.body.other_text_input,
  							dish: req.body.dish,
  							mucus: req.body.mucus,
  							habitats: req.body.livingspot,
  							description: req.body.description
  							});
  	mollusk.save(function(err){
  		if(err){
  			console.log("Something went wrong!");
  			res.render('newmollusk', {title: 'you have errors!', errors: mollusk.errors})
  		} else {
  			console.log("Successfully added the quote!");
  			res.redirect('/');
  		}
  	})//closes mollusk.save
  },//closes post: function(req, res)

  update: function(req, res, id){
    Mollusk.update({_id: id}, {name: req.body.name,
  							common_name: req.body.common_name,
  							other_common_name: req.body.other_text_input,
  							dish: req.body.dish,
  							mucus: req.body.mucus,
  							habitats: req.body.livingspot,
  							description: req.body.description
  							}, function(err){
  					//Code to run when database has attempted to update the matching record
  		if(err){
  			console.log("Updating went wrong!");
  			res.redirect('/');
  		}
  		else {
  			console.log("Update successful!");
  			res.redirect('/mollusk/'+id);
  		}

  	})//closes Mollusk.update

  },//closes update: function(req, res, id)

  destroy: function(req, res, id){
    Mollusk.remove({_id: id}, function(err){
  		if(err){
  			console.log("Deleting went wrong!");
  			res.redirect('/');
  		}
  		else {
  			console.log("Deletion successful!");
  			res.redirect('/');
  		}
  	}); //closes Mollusk.remove
  } //closes destroy: function(req, res, id)


}//closes module.exports
