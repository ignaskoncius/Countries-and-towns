import React, { Component } from 'react';
import './App.css';
import MyForm from './components/myForm';
import ItemsList from './components/itemsList';
import { getAllItems } from './utils/requests';

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
    return (
      <div className="App">
        <div className="container">
          <MyForm></MyForm>
          <ItemsList allData={this.state.allData}></ItemsList>
        </div>
      </div>
    );
  }
}

export default App;
