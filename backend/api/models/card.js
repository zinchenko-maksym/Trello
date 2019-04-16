const mongoose = require('mongoose')

const cardSchema=mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	cardName: String,
	listId: String
});

module.exports = mongoose.model('Card', cardSchema);