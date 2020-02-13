import React from "react";
import "./styles.css";
import Form from "./components/form";
import Titles from "./components/title";
import Weather from "./components/weather";

const Api_Key = "9b0b4aa4c2988908dd36ab98d2202e65";

class App extends React.Component {
  state = {
    temparature: undefined,
    humidity: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );

    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({

        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""

      })
    }else{
      this.setState({
        error:"please input proper values"
      })
    }
  }

  render(){
    return(
      <div> 
        <Form loadWeather = {this.getWeather} />

        <Weather>
           temperature={this.state.temperature}
           city={this.state.city}
           country={this.state.country}
           humidity={this.state.humidity}
           description={this.state.description}
           error={this.state.error}
        </Weather>

      </div>
    )
  }

}
export default App;