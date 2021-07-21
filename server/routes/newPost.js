const express = require('express');
const CitiesCountries = require('../models/post');
const router = express.Router();

router.post('/addNewPlace', (req, res) => {
  const newPost = new CitiesCountries(req.body);
  newPost
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.error(err.message));
});

module.exports = router;
