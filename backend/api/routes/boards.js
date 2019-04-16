const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Board = require('../models/board')

router.get('/', (req, res, next) => {
   
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
    
});

router.post('/', (req, res, next) => {
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
});

router.delete('/', (req, res, next) => {
    
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
    
});


module.exports = router;
