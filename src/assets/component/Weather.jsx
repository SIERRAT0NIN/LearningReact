import React, { Component } from "react";

const API_KEY = "<b6ba3ed28ec0a2ed6183145e16564d56>";

class Weather extends Component {
  state = {
    weatherData: "",
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weatherData: data,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.weatherData.name}
        {this.state.weatherData.main.temp}
      </div>
    );
  }
}

export default Weather;
