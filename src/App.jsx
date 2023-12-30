import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./App.css";
import "./reset.css";
import DropDown from "./DropDown.jsx";
import Container from "./Container.jsx";
import { WeatherContext } from "./Context/WeatherContext.jsx";

function App() {
  const countries = ["Georgia", "Germany", "France", "Portugal", "Switzerland"];
  const [storage, setStorage] = useState([]);
  const [country, setCountry] = useState("Georgia");
  const [countryInit, setCountryInit] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const maxButtonsToShow = 3;
  const { location, imageURL, weather, temp, windKm } =
    useContext(WeatherContext);

  useEffect(() => {
    if (country !== "") {
      axios
        .get(
          `http://universities.hipolabs.com/search?country=${country}&fbclid=IwAR0xW32xnf88vCD1JJgNcCL_lc9bByex_XOS7gHxThmKZWXoW7-ApyzOews`
        )
        .then((response) => {
          setStorage(response.data);
          console.log(location);
          console.log(imageURL);
          console.log(weather);
        })
        .catch((error) => {
          console.error("Universities API Error:", error);
        });

      setCurrentPage(1);
      setCountryInit(getCountryInitials(country));
    }
  }, [country]);

  const handleCountrySelection = (selectedValue) => {
    setCountry(selectedValue);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCountryInitials = (countryName) => {
    let countryInitials = "";

    if (countryName === "Georgia") {
      countryInitials = "ge";
    } else if (countryName === "Germany") {
      countryInitials = "de";
    } else if (countryName === "France") {
      countryInitials = "fr";
    } else if (countryName === "Portugal") {
      countryInitials = "pt";
    } else if (countryName === "Switzerland") {
      countryInitials = "ch";
    }

    return countryInitials;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = storage.slice(indexOfFirstItem, indexOfLastItem);
  const minPage = Math.max(1, currentPage - 1);
  const maxPage = Math.min(
    minPage + maxButtonsToShow - 1,
    Math.ceil(storage.length / itemsPerPage)
  );

  return (
    <div className="countryWeb">
      <div className="weatherInfo">
        <img
          className="amindiGeLogo"
          src="https://amindi.ge/static/img/header-logo.png"
        />
        <img src={imageURL} />
        <p>Location: {location}</p>
        <p>condition: {weather}</p>
        <p>temperature: ( {temp}C )</p>
        <p>wind speed: {windKm} Km/h</p>
      </div>

      <section>
        <div className="title">
          <p className="title">Please select country: </p>
          <DropDown
            massive={countries}
            classNm="countriesDropDown"
            className="countriesDropDown"
            name="Countries"
            selectedItem={country}
            onSelect={handleCountrySelection}
          />
        </div>

        {country !== "" && (
          <div className="countryInfo">
            <img
              className="flag"
              src={`https://flagcdn.com/w320/${countryInit}.png`}
              alt={`Flag of ${country}`}
            />
            <div className="universityList">
              {currentItems.map((p, index) => (
                <Container
                  key={index}
                  name={p.name}
                  countryName={p.country}
                  web={p.web_pages}
                />
              ))}
            </div>

            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {Array.from({ length: maxPage - minPage + 1 }, (_, i) => (
                <button key={minPage + i} onClick={() => paginate(minPage + i)}>
                  {minPage + i}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= storage.length}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
