import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Hotels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
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
      .then((commodities) => {
        console.log("commodities", commodities);
        this.setState({
          cities: commodities.results,
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Hotels</h1>
      </div>
    );
  }
}

export default Hotels;
