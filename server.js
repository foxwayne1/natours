const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello Wayne' });
});


app.listen('3001', () => console.log(`Listening at http://localhost:3001`));