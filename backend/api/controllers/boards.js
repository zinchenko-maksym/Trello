const mongoose = require('mongoose');

const Board = require('../models/board')


exports.boards_get_all = (req, res, next) => {
    Board.find({})
        .exec()
        .then(doc => {
        res.status(200).json({
            boards: doc
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        }); 
    
}

exports.boards_create_board = (req, res, next) => {
   console.log(req.headers.authorization)
   const board = new Board({
        _id: new mongoose.Types.ObjectId(),
        boardName: req.body.boardName
    });
    board
        .save()
        .then((result)=> {
            res.status(201).json({
                boards: result
            });
        })
        .catch(err => {    
            console.log(err);
            res.status(500).json({error: err})
        });
}


exports.deleate_all_boards = (req, res, next) => {
    
    Board.deleteMany({})
        .exec()
        .then(doc => {
        res.status(200).json({
            hi:  "hi"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        }); 
    
}