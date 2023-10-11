const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  res.send(`Random Number: ${randomNumber}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
