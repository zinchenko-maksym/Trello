const express = require('express');

const app = express();

app.get('/ok', (req, res) => {
  const customers = ["asddasddf","three"];
  console.log("nas zdes net ")
  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);