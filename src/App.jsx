import { useEffect, useState } from 'react'
import './App.css'
import Forecast from "./components/Forecast"
import Filters from "./components/Filters"
const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {
  // filteredForecastArray: initialized to the json response of the API after query, which is a forecast. Can be altered by user after filter is applied. User sees this data
  const [filteredForecastArray, setFilteredForecastArray] = useState([])
  // mainForecastArray: json response after query. Is not changed, and user does not see this array unless no filter is applied
  const [mainForecastArray, setMainForecastArray] = useState([])
  // leastPop: the least probability of preciptation of any array object (forecast)
  const [leastPop, setLeastPop] = useState(null);
  // avgHighTemp: the averaged high temp of each array object
  // avgLowtemp: the averaged low temp of each array object
  // avgPop: the averaged probability of preciptation of each array object
  const [avgHighTemp, setAvgHighTemp] = useState(0);
  const [avgLowTemp, setAvgLowTemp] = useState(0);
  const [avgPop, setAvgPop] = useState(0);

  /**
   * Formates a "7-15-2025" timestamp into "Tuesday, July 15, 2025". Used for human readable date formatting and dynamic url
   * @param timestamp - A timestamp
   * @returns - A date written out
   */
  const formatDateFull = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      weekday: "long",   // "Tuesday"
      year: "numeric",   // "2025"
      month: "long",     // "July"
      day: "numeric",    // "15"
    });
  };

  /**
   * Formates a "7-15-2025" timestamp into "Tuesday". Used in filtering
   * @param timestamp - A timestamp
   * @returns - A date, just the day
   */
  const formatDateDay = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      weekday: "long"   // "Tuesday"
    });
  };

  // This useEffect hook makes the API query, populates filteredForecastArray and mainForecastArray. Local storage data is retrieved if varables already exist
  useEffect(() => {
    const fetchForecastData = async () => {
      const response = await fetch(
        "https://api.weatherbit.io/v2.0/forecast/daily?city=Baltimore,MD&units=I&key=" + API_KEY
      );
      const json = await response.json();
      setFilteredForecastArray(json["data"]);
      setMainForecastArray(json["data"]);
      localStorage.setItem("forecastData", JSON.stringify(json["data"])); // ⬅️ Save it
    };

    const storedData = localStorage.getItem("forecastData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setMainForecastArray(parsedData);
      setFilteredForecastArray(parsedData);
    } else {
      fetchForecastData().catch(console.error); // ⬅️ Only fetch if nothing in localStorage
    }
  }, []);

  // Once mainForecastArray is populated, this hook examines the data and populates lowestPopDay, avgHighTemp, avgLowTemp, and avgPrecipitationChance
  useEffect(() => {
    if (mainForecastArray.length > 0) {
      const lowestPopDay = mainForecastArray.reduce((min, current) =>
        current.pop < min.pop ? current : min
      );
      setLeastPop(lowestPopDay.pop);
      let avgHighTemp = 0;
      let avgLowTemp = 0;
      let avgPreciptationChance = 0;
      for (let i = 0; i < mainForecastArray.length; i++) {
        avgHighTemp += mainForecastArray[i].max_temp;
        avgLowTemp += mainForecastArray[i].min_temp;
        avgPreciptationChance += mainForecastArray[i].pop;
      }
      avgHighTemp = (avgHighTemp / mainForecastArray.length);
      avgLowTemp = (avgLowTemp / mainForecastArray.length);
      avgPreciptationChance = (avgPreciptationChance / mainForecastArray.length);
      setAvgHighTemp(avgHighTemp);
      setAvgLowTemp(avgLowTemp);
      setAvgPop(avgPreciptationChance);
    }
  }, [mainForecastArray]);

  /**
   * Handles functionality of the searchbar filter as used in the Filters component. mainArray is filtered, then filteredArray is set to the filtered array
   * @param searchTerm - A search term that should be a day, e.g., "Tuesday"
   */
  // TODO: Be able to handle diff. variations of dates
  const handleSearchClick = (searchTerm) => {
    console.log("Search clicked. Term:", searchTerm);
    const results = mainForecastArray.filter((item) => formatDateDay(item.datetime) === searchTerm);
    setFilteredForecastArray(results);
  };

  /**
   * Handles functionality of the slider filter as used in the Filters component. mainArray is filtered, then filteredArray is set to the filtered array
   * @param searchTerm - An integer value as picked from the slider, e.g., 80
   */
  const handleSliderChange = (sliderValue) => {
    console.log("Slider value changed: ", sliderValue);
    const results = mainForecastArray.filter((item) => item.pop >= sliderValue);
    setFilteredForecastArray(results);
  };

  return (
  <>
    <div>
      <h2>Weather Forecast for Baltimore, Maryland</h2>
      <p>Average high: {avgHighTemp}°F, Average low: {avgLowTemp}°F, Average preciptation chance: {avgPop}%</p>
      {leastPop === null ? (
        <p>Loading forecast...</p>
      ) : (
        <>
          <Filters
            onSearchClick={handleSearchClick}
            leastPop={leastPop}
            onSliderChange={handleSliderChange}
          />
          {filteredForecastArray.map((forecast, i) => (
            <Forecast forecast={forecast} key={i} formatDate={formatDateFull} />
          ))}
        </>
      )}
    </div>
  </>
  )
}

export default App
