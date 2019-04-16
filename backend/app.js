const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const borderRoutes = require('./api/routes/boards');
const cardListRoutes = require('./api/routes/b');

mongoose.connect('mongodb+srv://maklaut:MZ7145824_@trello-aktlt.mongodb.net/test?retryWrites=true', 
  {
    useNewUrlParser: true
  }
)

app.use(morgan('dev'));
app.use(express.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method==='OPTIONS'){
      req.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
      return res.status(200).json({});
    }
    next();
})



app.use('/cardList', cardListRoutes);
app.use('/boards', borderRoutes);


app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;