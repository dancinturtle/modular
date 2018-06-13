var mongoose = require('mongoose');
var MolluskSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:1},
	common_name: {type: String, required: true},
	other_common_name: {type: String},
	dish: {type: String},
	mucus: {type: Number, required: true},
	habitats: {type: Array, required: true},
	description: {type: String}
}, {timestamps: true })

var Mollusk = mongoose.model('Mollusk', MolluskSchema);
