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

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="my-form">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            name="cityOrCountry"
            value={this.state.cityOrCountry}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter city or country name"
          />
          <input
            name="continent"
            value={this.state.continent}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter continent"
          />
          <input
            name="population"
            value={this.state.population}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter population"
          />
          <label htmlFor="cityCountry">Select your option</label>
          <select value={this.state.selectItem} onChange={this.handleInput} name="selectItem" id="cityCountry">
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
