const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
// Routes
const api = require('./routes/routes');
app.use('/',api);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task', {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});