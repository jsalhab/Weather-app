import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0189a8bcb4ace5fc6cb848239a1aa6c1`
    );

    const response = await api_call.json();

    console.log(response);
    if (response.cod === "404") {
      this.setState({
        error: "City is not found"
      });
    } else if (response.cod === "400") {
      this.setState({
        error: "Nothing to geocode"
      });
    } else if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    }
  };
  render() {
    return (
      <div className="weather-wrapper">
        <div className="weather_container">
          <h1>Weather Search</h1>
          <div>
            <div className="form">
              <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
