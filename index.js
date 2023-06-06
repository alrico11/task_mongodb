const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // import cors middleware
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');

const app = express();
const port = 3000;
const swaggerDocument = yaml.load(fs.readFileSync('./swagger/swagger.yaml', 'utf-8'))

// Use middleware
app.use(cors()); // enable cors
app.use(bodyParser.json());

// Routes
const api = require('./routes/routes');
app.use('/',api);

app.use('/api/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/task', {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
