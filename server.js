const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  res.json({ number: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
