const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const l = [{listName:"asddasddf"},{listName:"four"}];
  const c = [{ cardName: "43", listName:"asddasddf"}, {cardName: "4ss3",listName:"asddasddf"}];
    
    res.status(200).json({
        list: l, card: c
    });
});

router.post('/newCard', (req, res, next) => {
   console.log(req.body)
    res.status(201).json({
        card: req.body
    });
});
router.post('/newList', (req, res, next) => {
   console.log(req.body)
    res.status(201).json({
        list: req.body
    });
});


module.exports = router;