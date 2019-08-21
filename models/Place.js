const mongoose = require('mongoose');

let placeSchema = mongoose.Schema({
	place: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

let Place = mongoose.model('Place', placeSchema);

module.exports = Place;
