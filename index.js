require('dotenv').config();
const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const mainRoutes = require('./server/routes/mainRoutes');

app.use(cors());

const PORT = 4000;

const CitiesCountries = require('./server/models/post');

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

//   middleware
app.use(express.json());
app.use(cors());
app.use('/', mainRoutes);

app.get('/addNewPlace', (req, res) => {
  const newPost = new CitiesCountries({
    city: 'Barcelona',
    continent: 'Europe',
    population: 5,
    countryOrCity: 'City',
  });
  newPost
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.error(err.message));
});

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});
