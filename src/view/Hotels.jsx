import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HotelMap from "../components/HotelMap";
import HotelCard from "../components/HotelCard";
class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [""],
      coordonées: {
        latitude: 0,
        longitude: 0,
      },
    };
  }

  componentDidMount() {
    console.log("hotels");
    console.log("hotels", this.props.match.params.city);
    let url = `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`;
    console.log(url);
    fetch(
      `http://localhost:3002/api/hotels/city/${this.props.match.params.city}`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          cities: response.results,
        });
      })

      .catch((error) => console.error(error));
  }

  render() {
    console.log(this.state.coordonées);
    let Lat = this.state.coordonées.latitude;
    let Lon = this.state.coordonées.longitude;
    return (
      <div>
        <h1>Hotels wouhou</h1>
        <div>
          <div>
            {this.state.cities.length > 0 && (
              <div>
                <div className="container">
                  <div className="row">
                    {this.state.cities.map((hotel, index) => {
                      return (
                        <HotelCard
                          name={hotel.name}
                          prix={hotel.price}
                          image={this.state.images + hotel.source}
                          etoiles={hotel.stars}
                        />
                      );
                    })}
                  </div>
                  <HotelMap
                    citiesLatitude={Lat}
                    citiesLongitude={Lon}
                    hotels={this.state.city}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hotels;
