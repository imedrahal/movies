import React, { useEffect, useState } from "react";
import "../../syles/title-text.css";
import SearchComponent from "../Search/Search";

function Navbar() {

  return (
    <div
      className="navbar-container"
    >
      <div className="navbar-content" style={{ flex: 1 }}>
        {/*  big Carousel  */}
        <h2 className="title-text-navbar">MOVIENIGHT</h2>
      </div>
      <div className="navbar-content" style={{ flex: 1 }}>
          <div className='search-bar-navbar'>
            <SearchComponent />
          </div>
      </div>
    </div>
  );
}

export default Navbar;