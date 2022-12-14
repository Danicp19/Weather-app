import React, { useState } from 'react';
import Nav from './components/Nav';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import { Route, Routes } from 'react-router-dom';
import fetchCoord from "./services/fetchCoords"

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    if (cities.length > 3) {
      alert("No more cities can be added")
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("City ​​not found");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoord(pos.coords.latitude, pos.coords.longitude, setCities)
      })
  }, [])

  return (
    <div  >
      <div className="h-screen w-full blur-sm font-bold bg-[url('./assets/background.jpeg')] bg-cover backdrop-brightness-50 brightness-90 bg-center  " />
      <div className="bg-[url('./assets/background.jpeg')] bg-cover  bg-center  w-3/4 h-3/4 overflow-hidden m-[12%] absolute top-0 lg:mt-[8%] rounded-3xl shadow-2xl flex justify-end ">
        <div className="flex absolute bottom-2 left-8">

          {cities.length > 0 ? (
            <Card
              primary
              max={cities[cities.length - 1].max}
              min={cities[cities.length - 1].min}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}
            />) : null
          }
        </div>
        <div className="flex flex-col w-1/3  backdrop-blur-md bg-gray-300 bg-opacity-30 " >
          <Nav onSearch={onSearch} />
          < Routes>

            <Route path='/' element={
              <Cards
                cities={cities}
                onClose={onClose}
              />
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;