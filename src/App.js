import "./App.scss";
import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { fetchCity } from "./api";
import WeatherInfo from "./components/WeatherInfo";
import WeatherSearch from "./components/WeatherSearch";
import { useStateContext } from "./contexts/ApiContext";
import ReactCardFlip from "react-card-flip";

function App() {
  const [position, setPosition] = useState();
  const { data, setData, flip } = useStateContext();

  useEffect(() => {
    const ResponseWait = async () => {
      fetchCity(setData);
    };
    ResponseWait();
  }, []);

  return (
    <div className="app-container">
      {!data ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <WeatherInfo data={data} />
          <WeatherSearch />
        </ReactCardFlip>
      )}
    </div>
  );
}

export default App;
