import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Root = () => {
    function capitalizeFirst(str) {
    if (str.length === 0) {
        return ""; // Handle empty strings
    }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const location = city+state;
        navigate(`/forecast/${location}`,
            {
                state: {
                    "city": city,
                    "state": state
                }
            }
        );
    };

    return (
        <div>
            <h2>Enter your city and state to see your weekly forecast & weather data</h2>
            <form onSubmit={handleSubmit}>
                <label>City: </label>
                <input
                type="text"
                value={city}
                placeholder="Baltimore"
                onChange={(e) => setCity(capitalizeFirst(e.target.value))}
                required
                />
                <br />
                <br />
                <label>State: </label>
                <input
                type="text"
                value={state}
                placeholder="MD"
                onChange={(e) => setState(e.target.value)}
                minLength={2}
                maxLength={2}
                required
                />
                <br />
                <br />
                <button type="submit">See Forecast</button>
            </form>
        </div>
    )
}

export default Root;