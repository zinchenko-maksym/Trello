const mongoose = require('mongoose');

const List = require('../models/list')
const Card = require('../models/card')

exports.find_list_by_id = (req, res, next) => { 
     Card.find({})
        .exec()
        .then(cards => {
            List.find({boardId: req.params.boardId},function (err, docs) {})
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
}

exports.get_all_lists = (req, res, next) => { 
     Card.find({})
        .exec()
        .then(cards => {

            List.find({},function (err, docs) {})
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
}



exports.add_card =(req, res, next) => {

        

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
}


exports.add_list =(req, res, next) => {
    const id= req.params.boardId;
    const list = new List({

        _id: new mongoose.Types.ObjectId(),
        listName: req.body.listName,
        boardId: req.params.boardId
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
}


exports.delete_list= (req, res, next) => {

    Card.remove({list: req.body.listId})
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
    
}


exports.delete_all_lists=(req, res, next) => {
    
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
    
}


exports.delete_all_cards= (req, res, next) => {
    
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
    
}