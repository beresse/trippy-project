import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class HotelCard extends React.Component {
  render() {
    return (
      <div>
        <h1>HotelCard</h1>
        <div
          className='cityCard mb-3'
          style={{ width: "18rem" }}
          onClick={this.props.click}>
          <img src={this.props.image} className='card-img-top' alt='' />
          <div className='card-body'>
            <h4 className='card-title'>{this.props.name}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelCard;
