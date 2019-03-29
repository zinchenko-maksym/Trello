const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



app.get('/ok', (req, res) => {
  const customers = [{boardName:"asddasddf"},{boardName:"three"}];
  console.log(req.body);
  res.json(customers);
});
app.post('/ok', (req, res) => {

  const customers = [{boardName:"asddasddf"},{boardName:"three"}];
  console.log(JSON.stringify(req.body));
  console.log(JSON.stringify(customers));
  res.send(req.body);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);