import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CityCard from "../components/CityCard";
import getHomeData from "../Utils/Api"

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            cities: [],

        };
    }


    componentDidMount() {
        getHomeData()
            .then(response => {
                this.setState({
                    cities: response.cities,
                    image: response.source
                })
                console.log("cities", this.state.cities)
                console.log("image", this.state.cities)
            })
    }


    render() {
        return (
            <div className="container d-flex flex-column justify-content-center">
                <h1 className="text-center tabTitle">Popular</h1>
                <div className="row">
                    {this.state.cities.map((city) => {
                        return (
            
                
            );
                    })}
                </div>
            </div >





        )
    }
}

export default Home;