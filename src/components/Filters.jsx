import { useState } from "react";

function Filters({onSearchClick}) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={() => onSearchClick(searchTerm)}
        style={{ padding: "8px 12px", marginLeft: "8px", fontSize: "16px" }}
      >
        Search
      </button>
    </div>
  );
}

export default Filters;
