import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.loadWeather}>
        <input type="text" placeholder="City..." name="city"/>                  
        <input type="text" placeholder="Country" name="country"/>
        <button>Get Weather</button>        
      </form>
    )
  }
}
export default Form;