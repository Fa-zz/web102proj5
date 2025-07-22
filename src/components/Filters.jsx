import { useState } from "react";

function Filters({onSearchClick, leastPop, onSliderChange}) {
    // searchTerm: updated by what the user types into the search box
    const [searchTerm, setSearchTerm] = useState("");
    // sliderValue: updated by what the user selects in the slider
    const [sliderValue, setSliderValue] = useState(leastPop);

  /**
   * Gets the new slider value, updates the slider to the new value, and calls the handleSliderChange function
   * @param e - Event data
   */
    const sliderChange = (e) => {
        const newValue = parseInt(e.target.value);
        setSliderValue(newValue);        // Update state
        onSliderChange(newValue);        // Call external function
    };

    return (
        <div style={{ margin: "20px" }}>
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter day..."
            style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
            onClick={() => onSearchClick(searchTerm)}
            style={{ padding: "8px 12px", marginLeft: "8px", fontSize: "16px" }}
        >
            Search
        </button>
        <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={sliderChange}
            style={{ width: "300px" }}
        />
        <p>Filtering preciptation chance: {sliderValue}% or greater</p>
        </div>
  );
}

export default Filters;
