import React, { Component } from 'react';
const axios = require('axios');

class MyForm extends Component {
  state = {
    cityOrCountry: '',
    continent: '',
    population: '',
    selectItem: 'city',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    const objToSend = {
      cityOrCountry: this.state.cityOrCountry,
      continent: this.state.continent,
      population: this.state.population,
      selectItem: this.state.selectItem,
    };
    const ats = await axios.post('http://localhost:4000/addNewPlace', objToSend);
    console.log(ats);
  };

  handleTitle = (event) => {
    this.setState({ cityOrCountry: event.target.value });
  };
  handleContinent = (event) => {
    this.setState({ continent: event.target.value });
  };
  handlePopulation = (event) => {
    this.setState({ population: event.target.value });
  };
  handleSelect = (event) => {
    this.setState({ selectItem: event.target.value });
  };

  render() {
    return (
      <div className="my-form">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            value={this.state.title}
            onChange={this.handleTitle}
            type="text"
            placeholder="Enter city or country name"
          />
          <input
            value={this.state.continent}
            onChange={this.handleContinent}
            type="text"
            placeholder="Enter continent"
          />
          <input
            value={this.state.population}
            onChange={this.handlePopulation}
            type="text"
            placeholder="Enter population"
          />
          <label htmlFor="cityCountry">Select your option</label>
          <select value={this.state.selectItem} onChange={this.handleSelect} name="cityCountry" id="cityCountry">
            <option value="city">City</option>
            <option value="country">Country</option>
          </select>
          <button type="submit">Submit your form</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
