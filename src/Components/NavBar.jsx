import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import CityCard from "./CityCard";
import HotelCard from "./HotelCard";
import HotelMap from "./HotelMap";
import HotelMarker from "./HotelMarker";

class NavBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
              Home
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item active'>
                  <Link className='nav-link' to='/CityCard'>
                    CityCard <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/HotelCard'>
                    HotelCard
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/HotelMap'>
                    HotelMap
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/HotelMarker'>
                    HotelMarker
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/CityCard' component={CityCard} />
            <Route path='/HotelCard' component={HotelCard} />
            <Route path='/HotelMap' component={HotelMap} />
            <Route path='/HotelMarker' component={HotelMarker} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;
