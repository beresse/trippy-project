import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class Error404 extends React.Component {
  constructor() {
    super();
    this.state = {
      nimportequoi: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Error 404!!! :)</h1>
      </div>
    );
  }
}

export default Error404;
