import React, { Component } from 'react';
import OneItem from './oneItem';

class ItemsList extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="items-list">
          {this.props.allData.map((item) => (
            <li key={item._id}>
              <OneItem onDelete={this.props.onDelete} item={item}></OneItem>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
