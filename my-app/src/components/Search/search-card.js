
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../syles/arrow.css";
import "../../syles/search-card.css";
import Skeleton from "react-loading-skeleton";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"
import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchCard() {
  const [imageLoading, setImageLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("searchTerm");
  const [searchResults, setSearchResults] = useState([]);

console.log(searchResults,"e")

const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q", // Replace with your TMDb API key
        },
      }
    );

    setSearchResults(response.data.results); 
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(()=>{
  fetchData()
},[searchTerm])

 

  const renderMovieCard = (movie, movieIndex) => (
    <Col key={movieIndex} md={2} className="mb-5">
      <div class="fade-in-image">
      <Card.Img
      
        style={{ borderRadius: "10px",marginTop:"4rem",borderRadius:"20%",cursor: "pointer" }}
        variant="top"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
        className={`movie-image ${imageLoading ? "hidden" : ""}`}
      />
      </div>
      {imageLoading && (
        <Skeleton height={200} width={100} className="skeleton" />
      )}
      <Card.Body>
        <Card.Title className="movie-title">{movie.title}</Card.Title>
        <Card.Text className="movie-time" style={{ color: "white" }}>
          {movie.time}
        </Card.Text>
      </Card.Body>
    </Col>
  );

  return (
    <Row className="search-card-div">
      <p className="text-white display-3" style={{ margin: "0px" }}>
      {searchTerm}
      </p>
      <p className="text-white display-5">{searchResults.length} results</p>
      {searchResults.map((movie, movieIndex) => renderMovieCard(movie, movieIndex))}
    </Row>
  );
}

export default SearchCard;
