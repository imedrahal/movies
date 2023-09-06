import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../syles/arrow.css";
import { Link } from "react-router-dom"; 
import axios from "axios";

function MostRatedMovies({}) {
    const [movies, setMovies]=useState([])
const getTopRated= async() =>{
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
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
      setMovies(response.data.results)
      console.log (response.data.results[0].poster_path,'yessss')
  }
  useEffect(() => {
    getTopRated()  }, []);

  return (
    < >
      <p className="comming-this-week-title">Les films les mieux notés</p>

      <Carousel cols={6} rows={1} gap={10}  loop>
        {movies.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              <Link key={index} to={`/description/${movie.id}`}>
                <img
                  className="img-comming-this-week-card"
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
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
                      marginTop:"5rem"
                    }}
                  >
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: movie.vote_average*10 }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div style={{marginTop:"5rem"}}>
                  {movie.vote_average*10}%
                  </div>
                  
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
