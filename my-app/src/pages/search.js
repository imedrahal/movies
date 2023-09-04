import React from "react";
import SearchCard from "../components/Search/search-card";
import Loading from "../components/loadind"
import "../syles/search-page.css";
import "../syles//title-card.css";
function Search() {
  const headingStyle = {
    fontSize: "50px",
    color: "white",
  };

  const resultStyle = {
    fontSize: "35px",
    color: "white",
  };

  return (
    <div className="search-page">
      <div>
        <SearchCard />
      </div>
      <Loading/>
    </div>
  );
}

export default Search;
