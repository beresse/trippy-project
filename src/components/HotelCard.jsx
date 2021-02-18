import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import StarsRating from "stars-rating"

class HotelCard extends React.Component {
  render() {
    return (
      <div>
       <img src={this.props.image} className="card-img-top" alt="..." onError={(e)=> {
         e.target.onerror = null
         e.target.src= "http://via.placeholder.com/300x200"
       }} />
       <div className="card-body"/>
       <Link to={"../hotel/" + this.props.link}>{this.props.name}</Link>
       <p className="card-text">{this.props.prix}€</p>
       <p> <StarsRating 
                        // color1={'#ffff'}
                        color2={'#f7d51d'}
                        count={7}
                        value={this.props.etoiles}
                        size={30}
                        edit={false} // Important !
                        />
                    </p>
      </div>
    );
  }
}

export default HotelCard;
