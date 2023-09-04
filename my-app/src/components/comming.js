import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../syles/arrow.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";
function CommingThisWeekMovies() {
  const [imageLoading, setImageLoading] = useState(true);
  const [comming , setComming]=useState([])

  const getComming= async() =>{
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const configs = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q",
        },
      };
      const response = await axios.get(
        url,
        configs
      );
      setComming(response.data.results)
    //   console.log (comming[0].poster_path,'yessss')
  }
  useEffect(() => {
    getComming()}, []);
    // console.log(comming[0].poster_path,'commm')

  return (
    <>
      <p className="comming-this-week-title">A l'affiche cette semaine</p>

      <Carousel
        className="centered-card-container"
        cols={6}
        rows={1}
        gap={6}
        loop
      >
        {comming.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              {movie.poster_path ? (
                <Link key={index} to={`/description/${movie.id}`}>
                  <img
                    className="img-comming-this-week-card"
                    src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`}
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
