const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/generate', (req, res) => {
  const { start, end } = req.body;
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  res.json(numbers);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
