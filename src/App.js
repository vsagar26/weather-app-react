import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  let apiKey = "44b868acca9cd019767239c6083567ab";

  const getweatherData = (cityName) => {
    if (!cityName) return;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const inputCityHandler = (e) => {
    setInputCity(e.target.value);
  };

  const searchHandler = () => {
    getweatherData(inputCity);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="main-heading">Weather App</h2>
        <input
          type="text"
          className="input"
          onChange={inputCityHandler}
          value={inputCity}
        />
        <button className="search-btn" onClick={searchHandler}>
          Search
        </button>
        {Object.keys(data).length > 0 && (
          <div className="data-container">
            <h3 className="city">{data?.name}</h3>
            <h3 className="temp">{(data?.main?.temp - 273.15).toFixed(2)}°C</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
