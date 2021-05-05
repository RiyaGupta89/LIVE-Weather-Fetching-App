import React, { useState, useEffect } from "react";
import axios from "axios";

const TempApp = () => {
  const [city, setCity] = useState("Pune");
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a9f1a7176899184400cb7a7d65979fec&units=metric`
      );
      const resjson = await response.json();
      console.log(resjson);
      setCity(resjson.main);
    };
    getData();
  }, [search]);

  const onchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={onchange}
            value={search}
          />
        </div>

        {!city ? (
          <p>No Data Found!</p>
        ) : (
          <>
            <div className="subBox">
              <i className="fas fa-street-view fa-2x"></i>
              <h2>{search}</h2>
            </div>
            <div className="subBox-2">
              <h2>{city.temp}°Cel</h2>
              <p>
                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
              </p>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </>
        )}
      </div>
    </>
  );
};

export default TempApp;
