import React, { Component } from 'react';

class OneItem extends Component {
  state = {};
  render() {
    const { item } = this.props;
    return (
      <div key={item._id} className="items-list__card">
        <p>{item.cityOrCountry}</p>
        <p>{item.continent}</p>
        <p>{item.population}</p>
        <p>{item.selectItem}</p>
        <button className="edit-btn">Edit</button>
        <button onClick={() => this.props.onDelete(item._id)} className="delete-btn">
          Delete
        </button>
      </div>
    );
  }
}

export default OneItem;
