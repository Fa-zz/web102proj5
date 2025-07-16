import { useState } from "react";

function Filters({onSearchClick, leastPop, onSliderChange}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [sliderValue, setSliderValue] = useState(leastPop);

    const handleChange = (e) => {
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
            onChange={handleChange}
            style={{ width: "300px" }}
        />
        <p>Slider value: {sliderValue}</p>
        </div>
  );
}

export default Filters;
