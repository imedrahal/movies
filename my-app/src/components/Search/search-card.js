import React, { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../syles/arrow.css";
import "../../syles/search-card.css";
import Skeleton from "react-loading-skeleton";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"
function SearchCard() {
  const [imageLoading, setImageLoading] = useState(true);

  const movies = [
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    {
      title: "Movie 1",
      time: "1h48",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    },
    // Add more movie objects here
  ];

  const renderMovieCard = (movie, movieIndex) => (
    <Col key={movieIndex} md={2} className="mb-5">
      <Card.Img
        style={{ borderRadius: "3px" }}
        variant="top"
        src={movie.imageURL}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
        className={`movie-image ${imageLoading ? "hidden" : ""}`}
      />
      {imageLoading && (
        <Skeleton height={200} width={100} className="skeleton" />
      )}
      <Card.Body>
        <Card.Title className="movie-title">{movie.title}</Card.Title>
        <Card.Text className="movie-time" style={{ color: "darkgray" }}>
          {movie.time}
        </Card.Text>
      </Card.Body>
    </Col>
  );

  return (
    <Row className="search-card-div">
      <p className="text-white display-3" style={{ margin: "0px" }}>
        Sonic
      </p>
      <p className="text-white display-5">154 results</p>
      {movies.map((movie, movieIndex) => renderMovieCard(movie, movieIndex))}
    </Row>
  );
}

export default SearchCard;
