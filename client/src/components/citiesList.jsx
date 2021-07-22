import React, { Component } from 'react';
import OneItem from './oneItem';

class CitiesList extends Component {
  state = {};
  render() {
    return (
      <ul className="items-list">
        {this.props.allData.map((item) =>
          item.selectItem === 'City' ? (
            <li>
              <OneItem key={item._id} item={item}></OneItem>
            </li>
          ) : null
        )}
      </ul>
    );
  }
}

export default CitiesList;
