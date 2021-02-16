import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import getHomeData from "../utils/Api";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [],
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
        <h1 className='text-center tabTitle'>
          Let's discover the world together
        </h1>
        <div className='row'>
          {this.state.cities.map((city) => {
            return (
              <div className='filmCard mb-3'>
                <img
                  src={`http://localhost:3002/img/${city.slug}.png`}
                  className='card-img-top'
                  alt={`${city.name}`}
                />
                <div className='card-body'>
                  <h4 className='card-title'>{city.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
