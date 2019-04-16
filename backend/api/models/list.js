const mongoose = require('mongoose')

const listSchema=mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	listName: String
});

module.exports = mongoose.model('List', listSchema);