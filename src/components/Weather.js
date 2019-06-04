import React, { Component } from "react";

class Weather extends Component {
  render() {
    console.log(this.props.error);
    return (
      <div className="details">
        {this.props.city && this.props.country && (
          <p className="title">
            Location:
            <span className="value">
              {" "}
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="title">
            Temperature:
            <span className="value"> {this.props.temperature}F</span>
          </p>
        )}
        {this.props.humidity && (
          <p className="title">
            Humidity:
            <span className="value"> {this.props.humidity} </span>
          </p>
        )}
        {this.props.description && (
          <p className="title">
            Description:
            <span className="value"> {this.props.description}</span>
          </p>
        )}
        {this.props.error && (
          <p className="title">
            <span className="error"> {this.props.error}</span>
          </p>
        )}
      </div>
    );
  }
}

export default Weather;
