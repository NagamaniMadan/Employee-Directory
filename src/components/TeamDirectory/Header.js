import React from "react";

function Header({ handleInputChange, value }) {
  return (
    <div className="header-container px-3">
      <h1 className="ma-l2 nav-header">Team</h1>

      <div className="search-container">
        <input
          type="text"
          onChange={handleInputChange}
          value={value}
          className="search-input"
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
}

export default Header;
