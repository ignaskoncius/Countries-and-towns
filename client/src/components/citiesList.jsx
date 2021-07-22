import React, { Component } from 'react';

class CitiesList extends Component {
  state = {};
  render() {
    return (
      <div className="items-list">
        <ul>
          {this.props.allData.map((item) =>
            item.selectItem === 'City' ? (
              <div key={item._id}>
                <li>
                  <p>{item.cityOrCountry}</p>
                  <p>{item.continent}</p>
                  <p>{item.population}</p>
                  <p>{item.selectItem}</p>
                </li>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ) : null
          )}
        </ul>
      </div>
    );
  }
}

export default CitiesList;
