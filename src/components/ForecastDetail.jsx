// import { useEffect, useState } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { formatDateFull } from "../formatDate.js"

function ForecastDetail() {
    const { date } = useParams()
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    console.log(state);

    const handleGoBack = () => {
        navigate(-1); // go back one step
    };

    return (
        <div className="forecast-container">
            <button onClick={handleGoBack}>Go Back</button>
            <h2>Forecast Details for {formatDateFull(date)}</h2>

            {state.forecast ? (
                <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Wind gust speed </th>
                        <td>{state.forecast.wind_gust_spd} miles per hour</td>
                    </tr>
                    <tr>
                        <th>Average temp </th>
                        <td>{state.forecast.temp} °F</td>
                    </tr>
                    <tr>
                        <th>"Feels like" maximum temp </th>
                        <td>{state.forecast.app_max_temp} °F </td>
                    </tr>
                    <tr>
                        <th>"Feels like" minimum temp </th>
                        <td>{state.forecast.app_min_temp} °F </td>
                    </tr>
                    <tr>
                        <th>Snow depth </th>
                        <td>{state.forecast.snow_depth} inches </td>
                    </tr>
                    <tr>
                        <th>Pressure  </th>
                        <td>{state.forecast.pres} millibars</td>
                    </tr>
                    <tr>
                        <th>Dew point</th>
                        <td>{state.forecast.dewpt} °F </td>
                    </tr>
                    <tr>
                        <th>Relative humidity </th>
                        <td>{state.forecast.rh} </td>
                    </tr>
                    <tr>
                        <th>Average cloud coverage </th>
                        <td>{state.forecast.clouds}% </td>
                    </tr>
                    <tr>
                        <th>Visibility </th>
                        <td>{state.forecast.vis} miles</td>
                    </tr>
                    <tr>
                        <th>UV index </th>
                        <td>{state.forecast.uv} </td>
                    </tr>
                    <tr>
                        <th>Ozone </th>
                        <td>{state.forecast.ozone} Dobson </td>
                    </tr>
                    <tr>
                        <th>Moon phase </th>
                        <td>{state.forecast.moon_phase} </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            ) : (
                <p>No forecast data available.</p>
            )}
        </div>
    );
}

export default ForecastDetail;