const express = require('express');
const cors = require('cors');

const app = express();

const port = 4000;

// Config
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    status: '200',
    message: 'Hey from api!',
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
