import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CityCard from "../components/CityCard";
import getHomeData from "../utils/Api.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      img: "http://localhost:3002",
    };
  }

  componentDidMount() {
    getHomeData().then((response) => {
      this.setState({
        cities: response.cities,
        image: response.source,
      });
      console.log("cities", this.state.cities);
      console.log("image", this.state.cities);
    });
  }

  render() {
    return (
      <div className='container d-flex flex-column justify-content-center'>
        <h1 className='text-center tabTitle'>Découvrir le monde</h1>
        <div className='row'>
          {this.state.cities.length > 0 &&
            this.state.cities.map((city,  index) => {
              return (
                <div className='cityCard col-6 justify-content-center'>
                  <Link to={`/hotels/${city.slug}`}>
                    <CityCard key={index}
                      cities={city.name}
                      image={this.state.img + city.source}
                      alt={`${city.name}`}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
        {this.state.cities.length === 0 && (
          <h2 className='text-center'>OH no! Loading, please wait!</h2>
        )}
      </div>
    );
  }
}

export default Home;
