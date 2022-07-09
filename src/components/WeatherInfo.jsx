import { TiWeatherSunny, TiWeatherWindy } from "react-icons/ti";
import { ImDroplet } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useStateContext } from "../contexts/ApiContext";

function WeatherInfo({ data }) {
  const [date, setDate] = useState(new Date());
  const { flip, setFlip } = useStateContext();

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, []);

  return (
    <div className="card">
      <div className="card-container">
        <h1 className="header">
          Weather <TiWeatherSunny />
        </h1>

        <div className="card-content-container">
          <div className="content-header-container">
            <h3 className="content-header">{data?.location?.name}</h3>
            <h3 className="content-header">
              {date?.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </h3>
          </div>

          <div className="temperature-container">{data?.current?.temp_c}°</div>
          <div className="condition">
            <span>{data?.current?.condition?.text}</span>
          </div>
          <div className="weather-conditions-container">
            <ul className="weather-conditions-list">
              <li>
                <TiWeatherWindy /> {data?.current?.wind_kph} km/h
              </li>
              <li>
                <ImDroplet /> {data?.current?.humidity}%
              </li>
            </ul>
            <button
              onClick={() => {
                setFlip(!flip);
              }}
            >
              <AiOutlineSearch size="50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
