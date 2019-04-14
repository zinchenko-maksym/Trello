const mongoose = require('mongoose')

const boardSchema=mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	boardName: String
});

module.exports = mongoose.model('Board', boardSchema);