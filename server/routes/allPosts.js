const express = require('express');
const CitiesCountries = require('../models/post');
const router = express.Router();

router.get('/allPosts', async (req, res) => {
  try {
    const items = await CitiesCountries.find();
    res.json(items);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
