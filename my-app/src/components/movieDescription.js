import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import AddButton from "../components/buttons/Regarder";
import StarButton from "../components/buttons/statusButton";
import axios from "axios";
import "../syles/movie-description-file.css"; // Import your CSS file with the play-button class

function MovieDescription(props) {
  const [imageLoading, setImageLoading] = useState(true);
  const [description,setDescription]=useState([])
  const [genere,setGenere]=useState([])

  const { id } = useParams();

  function convertToHours(minutes) {
    if (typeof minutes !== "number" || minutes < 0) {
      throw new Error("something rang");
    }

    const hours = Math.floor(minutes / 60);
    const Tominutes = minutes % 60;

    const formattedTime = `${hours}h ${Tominutes}m`;
    return formattedTime;
  }

  const fetchMovieDetails= async(id) =>{
    const configs = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q",
        },
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        configs
      );
      setDescription(response.data)
      setGenere(response.data.genres)
    //   console.log (id,description,'des')
  }



  useEffect(() => {
    fetchMovieDetails(id);
    console.log (id,description,'des')

}, [id]);
    

  return (
    <div className="first-part-description">
      <div
        className="container-sm::before"
        style={{
          content: `url(https://image.tmdb.org/t/p/w185/${description.poster_path})`,
          filter: "blur(70px)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70%",
          zIndex: -1,
        }}
      ></div>
      <div className="texts" style={{ flex: 1 }}>
        <h2 className="text-white display-4" style={{ marginBottom: "2rem" ,fontWeight:600}}>
          {description.title}
        </h2>
        <div>
          <p className="text-white" style={{ margin: "0px" }}>
            {genere ? (
                genere.map((element) => element?.name + ", ")
              ) : (
                <Skeleton width={200} height={20} />
              )}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ marginRight: "10px", color: "white" }}>
            {description && description.runtime ? (
                  convertToHours(description.runtime)
                ) : (
                  <Skeleton width={100} height={20} />
                )}
            </div>
            <div style={{ width: "30%" }}>
              <div
                class="progress d-flex"
                style={{
                  width: "80%",
                  height: "9px",
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
            </div>
            {((description.vote_average*100)/10).toFixed(1)}%
          </div>
        </div>

        <div style={{ display: "flex", marginBottom: "2rem" }}>
          <div style={{ marginRight: "10px" }}>
            <AddButton />{" "}
          </div>
          <div>
            <StarButton />
          </div>
        </div>
        <p
          className="text-white movie-synopsis"
          style={{ marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "20px", fontWeight: 500, margin: "0px" }}>
            synopsis
          </p>
          {description.overview}
        </p>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          {/* <div style={{ marginRight: "100px" ,color: "white",
}}>
          {genere ? (
                description?.production_companies.map((element) => "name of companie "+element?.name + ", "+"origin country: "+element?.origin_country)
              ) : (
                <Skeleton width={200} height={20} />
              )}
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
lowell            </p>
            <p className="text-white">lowell</p>
          </div> */}
          {/* <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              lowell
            </p>
            <p className="text-white">lowell</p>{" "}
          </div> */}
        </div>
        <div style={{ display: "flex" }}>
          {/* <div style={{ marginRight: "100px" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              thelith
            </p>
            <p className="text-white">thelith</p>{" "}
          </div> */}
          {/* <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              {description.person4}
            </p>
            <p className="text-white">{description.role}</p>{" "}
          </div> */}
        </div>
      </div>

      <div className="image" style={{ flex: 1 }}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${description.poster_path}`}
          style={{
            height: "40rem",
            width: "25rem",
            borderRadius: "5px",
            marginLeft: "2.5rem",
          }}
        />
      </div>
    </div>
  );
}

export default MovieDescription;
