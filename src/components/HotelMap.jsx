import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import StarsRating from "stars-rating"
import HotelMarker from "./HotelMarker"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


class HotelMap extends React.Component {
  render() {
    return (
      // Center.lat et lon
      <div>
        
        <Map center={[this.props.citiesLatitude, this.props.citiesLongitude]} zoom={13} style={{ height: "36rem", width: "36rem" }}>
      
        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.props.hotels.map((hotel, index) => {
                        return (
                            <HotelMarker
                                title={hotel.name}
                                desc={hotel.address}
                                lat={hotel.location.lat} // Peut être voir le result
                                lon={hotel.location.lon}
                            />
                        )
                    })
                    }
                </Map>
      
      </div>
    );
  }
}

export default HotelMap;
