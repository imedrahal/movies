import React from "react";
import Trailers from "../components/Trailler";
import Casting from "../components/casting";
import MovieDescription from "../components/movieDescription"; // Fixed typo in the import
import "../syles/title-card.css";
import "../syles/search-page.css";

function Description() {
  return (
    <div className="description-page">
      <div className="movie-description">
        <MovieDescription />
      </div>
      <div className="trailer-part">
        <Trailers />
      </div>
      <div className="casting">
        <Casting />
      </div>
    </div>
  );
}

export default Description;
