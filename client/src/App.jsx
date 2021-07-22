import React, { Component } from 'react';
import './App.css';
import MyForm from './components/myForm';
import ItemsList from './components/itemsList';
import NavBar from './components/navBar';
import { getAllItems } from './utils/requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CitiesList from './components/citiesList';
import CountriesList from './components/countriesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allData: [] };
  }

  async componentDidMount() {
    const dataItems = await getAllItems();
    this.setState({ allData: dataItems });
  }

  render() {
    const { allData } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <NavBar></NavBar>
            <Switch>
              <Route path="/allPosts" exact render={(props) => <ItemsList allData={allData} {...props} />} />
              <Route path="/cities" exact render={(props) => <CitiesList allData={allData} {...props} />} />
              <Route path="/countries" exact render={(props) => <CountriesList allData={allData} {...props} />} />
              <Route path="/form" exact render={(props) => <MyForm {...props} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
