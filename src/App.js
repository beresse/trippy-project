import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar"
import getHomeData from "./Utils/Api"
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [], 
      
    };
  }

  componentDidMount() {
    getHomeData().then((response) => {
      this.setState({
        cities: response.cities,
      });
      console.log("cities", this.state.cities);
    });
  }

  render() {
    return (
      <> 
        <NavBar /> 
        
      
     
    </> 
    );
  }
}

export default App;
