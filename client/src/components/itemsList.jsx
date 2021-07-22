import React, { Component } from 'react';
import OneItem from './oneItem';

class ItemsList extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <button onClick={() => this.props.onGetCitiesCountries('')}>All places</button>
        <button onClick={() => this.props.onGetCitiesCountries('City')}>All cities</button>
        <button onClick={() => this.props.onGetCitiesCountries('Country')}>Countries</button> */}
        <ul className="items-list">
          {this.props.allData.map((item) => (
            <li key={item._id}>
              <OneItem item={item}></OneItem>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
