require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(cors());

const PORT = 4000;

mongoose
  .connect(process.env.MONGO_CONNECT_STRING, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Connected to Mongoooooooooose');
    app.listen(4000);
  })
  .catch((err) => console.error(err.message));

// middleware
// leidzia req body gauti kaip json
app.use(express.json());
app.use(cors());

// routes
const allPosts = require('./server/routes/allPosts');
const newPost = require('./server/routes/newPost');
const deleteItem = require('./server/routes/deleteItem');

app.use('/', allPosts);
app.use('/', newPost);
app.use('/', deleteItem);

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});
