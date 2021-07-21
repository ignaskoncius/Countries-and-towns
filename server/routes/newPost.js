const express = require('express');
const CitiesCountries = require('../models/post');
const router = express.Router();

router.get('/addNewPlace', (req, res) => {
  const newPost = new CitiesCountries({
    cityOrCountry: 'Canada',
    continent: 'North America',
    population: 20,
    selectItem: 'Country',
  });
  newPost
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.error(err.message));
});

module.exports = router;
