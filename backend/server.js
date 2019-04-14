const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = require('./app');
/*const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());*/


const server = http.createServer(app);
/*app.get('/newBoard', (req, res) => {
  const boards = [{boardName:"asddasddf"},{boardName:"three"}];
  console.log(req.body);
  res.json(boards);
});
app.post('/newBoard', (req, res) => {
  res.send(req.body);
});
app.post('/newCard', (req, res) => {
  res.send(req.body);
});

app.post('/newList', (req, res) => {
  res.send(req.body);
});

app.get('/newCardList', (req, res) => {
  const l = [{listName:"asddasddf"},{listName:"four"}];
  const c = [{ cardName: "43", listName:"asddasddf"}, {cardName: "4ss3",listName:"asddasddf"}];
  const result={list: l, card: c }
  res.json(result);
});*/

const port = process.env.PORT || 5000;;

server.listen(port, () => `Server running on port ${port}`);