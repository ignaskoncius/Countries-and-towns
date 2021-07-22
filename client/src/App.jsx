import React, { Component } from 'react';
import './App.css';
import MyForm from './components/myForm';
import ItemsList from './components/itemsList';
import NavBar from './components/navBar';
import { getAllItems } from './utils/requests';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allData: [] };
  }

  async refreshItemsData() {
    const dataItems = await getAllItems();
    this.setState({ allData: dataItems });
  }

  async componentDidMount() {
    await this.refreshItemsData();
    console.log(this.state.allData);
  }

  getCitiesCountries = async (cityOrCountry) => {
    await this.refreshItemsData();
    if (cityOrCountry === '') return;
    const filterredAllData = this.state.allData.filter((item) => {
      return item.selectItem === cityOrCountry;
    });
    this.setState({ allData: filterredAllData });
  };

  handleDelete = async (id) => {
    const objToDelete = await this.state.allData.filter((item) => item._id === id);
    await axios.delete(`http://localhost:4000/delete/${id}`, objToDelete);
    await this.refreshItemsData();
  };

  render() {
    const { allData } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <NavBar onGetCitiesCountries={this.getCitiesCountries}></NavBar>
            <Switch>
              <Route path="/form" exact render={(props) => <MyForm {...props} />} />
              <Route
                path="/"
                exact
                render={(props) => <ItemsList onDelete={this.handleDelete} allData={allData} {...props} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
