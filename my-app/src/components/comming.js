import React, { useState } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../syles/arrow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function CommingThisWeekMovies() {
  const [imageLoading, setImageLoading] = useState(true);

  const movies = [
    {
      title: "Movie 1",
      time: "1h48",
      imageURL: "https://picsum.photos/800/600?random=1",
    },
    {
      title: "Movie 2",
      time: "4:30 PM",
      imageURL: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Movie 3",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=4",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=5",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=6",
    },
    {
      title: "Movie 3q",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=7",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=8",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=9",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=10",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=11",
    },
    {
      title: "Movie 3f",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=12",
    },
    // Add more movies as needed
  ];

  return (
    <>
      <p className="comming-this-week-title">A l'affiche cette semaine</p>

      <Carousel
        className="centered-card-container"
        cols={6}
        rows={1}
        gap={5}
        loop
      >
        {movies.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              {movie.imageURL ? (
                <Link key={index} to={`/description/${movie.title}`}>
                  <img
                    className="img-comming-this-week-card"
                    src={movie.imageURL}
                    alt={movie.title}
                  />
                </Link>
              ) : (
                <Skeleton height={220} width={155} />
              )}
              <div>
                {movie.title ? (
                  <h3 className="movie-title">{movie.title}</h3>
                ) : (
                  <Skeleton width={120} height={15} borderRadius={50} />
                )}
                <text className="movie-time">
                  {`${movie.time}`}
                </text>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default CommingThisWeekMovies;
