import React, { Component } from 'react';
import './App.css';
import MyForm from './components/myForm';
import ItemsList from './components/itemsList';
import NavBar from './components/navBar';
import { getAllItems } from './utils/requests';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allData: [] };
  }

  async componentDidMount() {
    const dataItems = await getAllItems();
    this.setState({ allData: dataItems });
  }

  getCitiesCountries = async (cityOrCountry) => {
    const dataItems = await getAllItems();
    this.setState({ allData: dataItems });
    if (cityOrCountry === '') return;
    const filterredAllData = this.state.allData.filter((item) => {
      return item.selectItem === cityOrCountry;
    });
    this.setState({ allData: filterredAllData });
  };

  handleDelete = () => {
    console.log('item is deleted');
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
              <Route path="/" exact render={(props) => <ItemsList allData={allData} {...props} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
