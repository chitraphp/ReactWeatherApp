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
  };
}
