import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.city}, {this.props.country}
        </p>
        <p>{this.props.temparature}</p>
        <p>{this.props.humidity}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
