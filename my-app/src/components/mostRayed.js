import React from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../syles/arrow.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function MostRatedMovies() {
  const movies = [
    {
      title: "Movie 1",
      time: "2:00 PM",
      imageURL: "https://picsum.photos/800/600?random=13",
    },
    {
      title: "Movie 2",
      time: "4:30 PM",
      imageURL: "https://picsum.photos/800/600?random=14",
    },
    {
      title: "Movie 3",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=15",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=16",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=17",
    },
    {
      title: "Movie 3d",
      time: "7:00 PM",
      imageURL: "https://picsum.photos/800/600?random=18",
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
      <p className="comming-this-week-title">Les films les mieux notés</p>

      <Carousel cols={6} rows={1} gap={10} loop>
        {movies.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              <Link key={index} to={`/description/${movie.title}`}>
                <img
                  className="img-comming-this-week-card"
                  src={movie.imageURL}
                  alt={movie.title}
                />
              </Link>

              <div>
                <h3 className="movie-title">{movie.title}</h3>
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "start",
                    alignItems: "center",
                    color: "grey",
                  }}
                >
                  <div
                    class="progress d-flex"
                    style={{
                      width: "40%",
                      height: "5px",
                      marginRight: "10px",
                      backgroundColor: "black",
                    }}
                  >
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  80%
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default MostRatedMovies;
