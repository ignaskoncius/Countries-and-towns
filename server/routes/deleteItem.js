const express = require('express');
const CitiesCountries = require('../models/post');
const router = express.Router();

router.delete('delete/:_id', async (req, res) => {
  try {
    const itemId = req.params._id;
    const foundItemObj = await CitiesCountries.findByIdAndDelete(itemId);
    res.json(foundItemObj);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
