import fetchData from "./fetch";
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
export default function fetchCoords(lat, lon, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  ).then((city) => {
    if (city) {
      setData((oldCities) => [...oldCities, city]);
    } else {
      alert("City ​​not found");
    }
  });
}