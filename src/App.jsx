import { useEffect, useState } from 'react'
import './App.css'
import DayCard from "./components/DayCard"
import Filters from "./components/Filters"
const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  const [forecastArray, setForecastArray] = useState([])
  const [mainForecastArray, setMainForecastArray] = useState([])
  const [leastPop, setLeastPop] = useState(null);
  const [avgHighTemp, setAvgHighTemp] = useState(0);
  const [avgLowTemp, setAvgLowTemp] = useState(0);
  const [avgPreciptationChance, setAvgPrecipitationChance] = useState(0);

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
      const json = await response.json();
      setForecastArray(json["data"]);
      setMainForecastArray(json["data"]);
    }
    fetchForecastData().catch(console.error)
  }, []);

  useEffect(() => {
    if (forecastArray.length > 0) {
      const lowestPopDay = forecastArray.reduce((min, current) =>
        current.pop < min.pop ? current : min
      );
      setLeastPop(lowestPopDay.pop);
      let avgHighTemp = 0;
      let avgLowTemp = 0;
      let avgPreciptationChance = 0;
      for (let i = 0; i < forecastArray.length; i++) {
        avgHighTemp += forecastArray[i].max_temp;
        avgLowTemp += forecastArray[i].min_temp;
        avgPreciptationChance += forecastArray[i].pop;
      }
      avgHighTemp = (avgHighTemp / forecastArray.length);
      avgLowTemp = (avgLowTemp / forecastArray.length);
      avgPreciptationChance = (avgPreciptationChance / forecastArray.length);
      setAvgHighTemp(avgHighTemp);
      setAvgLowTemp(avgLowTemp);
      setAvgPrecipitationChance(avgPreciptationChance);
    }
  }, [forecastArray]);

  const handleSearchClick = (searchTerm) => {
    console.log("Search clicked. Term:", searchTerm);
    const results = mainForecastArray.filter((item) => formatDateDay(item.datetime) === searchTerm);
    setForecastArray(results);
  };

  const handleSliderChange = (sliderValue) => {
    console.log("Slider value changed: ", sliderValue);
    const results = mainForecastArray.filter((item) => item.pop >= sliderValue);
    setForecastArray(results);
  };

  return (
  <>
    <div>
      <h2>Weather Forecast for Baltimore, Maryland</h2>
      <p>Average high: {avgHighTemp}°F, Average low: {avgLowTemp}°F, Average preciptation chance: {avgPreciptationChance}%</p>
      {leastPop === null ? (
        <p>Loading forecast...</p>
      ) : (
        <>
          <Filters
            onSearchClick={handleSearchClick}
            leastPop={leastPop}
            onSliderChange={handleSliderChange}
          />
          {forecastArray.map((forecast, i) => (
            <DayCard forecast={forecast} key={i} formatDate={formatDateFull} />
          ))}
        </>
      )}
    </div>
  </>
  )
}

export default App
