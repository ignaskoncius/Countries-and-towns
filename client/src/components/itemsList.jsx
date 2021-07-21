import React, { Component } from 'react';

class ItemsList extends Component {
  state = {};
  render() {
    return (
      <div className="items-list">
        <ul>
          {this.props.allData.map((item) => (
            <li key={item._id}>
              <p>{item.cityOrCountry}</p>
              <p>{item.continent}</p>
              <p>{item.population}</p>
              <p>{item.selectItem}</p>
            </li>
            <button>Edit</button>
            <button>Delete</button>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemsList;