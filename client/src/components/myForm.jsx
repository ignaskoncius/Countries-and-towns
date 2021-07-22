import React, { Component } from 'react';
const axios = require('axios');

class MyForm extends Component {
  state = {
    cityOrCountry: '',
    continent: '',
    population: '',
    selectItem: 'City',
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
    this.setState({ cityOrCountry: '', continent: '', population: '', selectItem: 'City' });
    console.log(ats);
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <form className="form-container-main" onSubmit={this.handleSubmit} autoComplete="off">
          <input
            className="form__input"
            name="cityOrCountry"
            value={this.state.cityOrCountry}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter city or country name"
          />
          <input
            className="form__input"
            name="continent"
            value={this.state.continent}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter continent"
          />
          <input
            className="form__input"
            name="population"
            value={this.state.population}
            onChange={this.handleInput}
            type="text"
            placeholder="Enter population"
          />
          <select
            className="form__input"
            value={this.state.selectItem}
            onChange={this.handleInput}
            name="selectItem"
            id="cityCountry"
          >
            <option value="City">City</option>
            <option value="Country">Country</option>
          </select>
          <button className="form__btn" type="submit">
            Submit your form
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
