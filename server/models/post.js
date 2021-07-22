const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    cityOrCountry: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    selectItem: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CitiesCountries = mongoose.model('citiesCountries', postSchema);

module.exports = CitiesCountries;
