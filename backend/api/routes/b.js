const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const List = require('../models/list')
const Card = require('../models/card')

router.get('/', (req, res, next) => {   
     Card.find({})
        .exec()
        .then(cards => {
            List.find({})
            .exec()
            .then(lists => {
                res.status(200).json({
                    lists: lists,
                    cards: cards
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
});

router.post('/newCard', (req, res, next) => {

        

    const card = new Card({
        _id: new mongoose.Types.ObjectId(),
        cardName: req.body.cardName,
        listId: req.body.listId
    });
    card
        .save()
        .then((result)=> {
            res.status(201).json({
                card: result
            });
        })
        .catch(err => {    
            console.log(err);
            res.status(500).json({error: err})
        }); 
});

router.post('/newList', (req, res, next) => {
    const list = new List({
        _id: new mongoose.Types.ObjectId(),
        listName: req.body.listName,
    });
    list
        .save()
        .then((result)=> {
            res.status(201).json({
                list: result
            });
        })
        .catch(err => {    
            console.log(err);
            res.status(500).json({error: err})
        }); 
});

router.delete('/deleteList', (req, res, next) => {

    Card.remove({listId: req.body.listId})
        .exec()
    List.deleteOne({_id: req.body.listId})
        .exec()
        .then(doc => {
        res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        }); 
    
});


router.delete('/deleteLists', (req, res, next) => {
    
    List.deleteMany({})
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
router.delete('/deleteCards', (req, res, next) => {
    
    Card.deleteMany({})
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