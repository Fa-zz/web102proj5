import { useEffect, useState } from 'react'
import './App.css'
import DayCard from "./components/DayCard"
import Filters from "./components/Filters"
const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  const [forecastArray, setForecastArray] = useState([])

  const formatDateFull = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      weekday: "long",   // "Tuesday"
      year: "numeric",   // "2025"
      month: "long",     // "July"
      day: "numeric",    // "15"
    });
  };

  const formatDateDay = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      weekday: "long"   // "Tuesday"
    });
  };

  useEffect(() => {
    const fetchForecastData = async () => {
      const response = await fetch(
        "https://api.weatherbit.io/v2.0/forecast/daily?city=Baltimore,MD&units=I&key=" 
        + API_KEY
      )
      const json = await response.json()
      setForecastArray(json["data"])
    }
  fetchForecastData().catch(console.error)
  }, []);

  const handleSearchClick = (searchTerm) => {
    console.log("Search clicked. Term:", searchTerm);
    const results = forecastArray.filter((item) => formatDateDay(item.datetime) === searchTerm);
    setForecastArray(results);
  };

  return (
    <>
      <div>
        <h2>Weekly Weather Forecast for Baltimore, Maryland</h2>
        <Filters onSearchClick={handleSearchClick} />
        {forecastArray.map((forecast, i) => (
          <DayCard forecast={forecast} key={i} formatDate={formatDateFull} />
        ))}
      </div>
    </>
  )
}

export default App
