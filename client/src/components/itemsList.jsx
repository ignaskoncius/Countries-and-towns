import React, { Component } from 'react';
import OneItem from './oneItem';

class ItemsList extends Component {
  state = {};
  render() {
    return (
      <ul className="items-list">
        {this.props.allData.map((item) => (
          <li>
            <OneItem key={item._id} item={item}></OneItem>
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemsList;
