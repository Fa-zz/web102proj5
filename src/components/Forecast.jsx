import { Link } from "react-router-dom"

const Forecast = ({forecast, formatDate}) => {
    const forecastImgUrl = "https://cdn.weatherbit.io/static/img/icons/"

    return (
        <div className="forecastCard">
            <Link
            style={{ color: "Blue" }}
            to={`/forecast/${forecast.datetime}`}
            key={forecast.datetime}
            >
                <h3>Forecast for {formatDate(forecast.datetime)}</h3>
            </Link>

            <div className="forecastContent">
                <img
                className="forecastImg"
                src={forecastImgUrl + forecast.weather.icon + ".png"}
                alt={forecast.weather.description}
                />
                
                <div className="forecastText">
                    <p>{forecast.weather.description}</p>
                    <p>Max temp: {forecast.max_temp}°F, Min temp: {forecast.min_temp}°F</p>
                    <p>Probability of precipitation: {forecast.pop}%, Precipitation: {forecast.precip} inches</p>
                    <p>Wind speed: {forecast.wind_spd} mph, Direction: {forecast.wind_cdir_full}</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast;