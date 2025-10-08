const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Dunia!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(` App running at http://localhost: ${port}`);
});
