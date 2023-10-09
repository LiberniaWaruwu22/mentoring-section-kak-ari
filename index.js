const express = require('express');
const app = express();
const port = 3000; // Ganti dengan port yang sesuai

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
