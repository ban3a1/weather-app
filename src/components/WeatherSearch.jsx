import { BiSearchAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ApiContext";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchCity } from "../api";
import usePrevious from "../usePrevious";

function WeatherInfo(props) {
  const { flip, setFlip, search, setSearch, setData, data } = useStateContext();

  const handleSearch = (search) => {
    fetchCity(setData, search);
    data && setFlip(!flip);
  };

  return (
    <div className="card">
      <div className="card-container">
        <div className="header-container">
          <h1 className="header">
            Search <BiSearchAlt />
          </h1>
          <button
            onClick={() => {
              setFlip(!flip);
            }}
          >
            <IoMdClose size="30" />
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Enter the city name"
          />
          <button
            type="submit"
            className="btn btn-light"
            onClick={() => {
              handleSearch(search);
            }}
          >
            <AiOutlineSearch />{" "}
          </button>
        </div>
        <div className="current-city">
          <span>Current city: {data?.location?.name}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
