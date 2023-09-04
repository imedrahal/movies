import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import AddButton from "../components/buttons/Regarder";
import StarButton from "../components/buttons/statusButton";

import "../syles/movie-description-file.css"; // Import your CSS file with the play-button class

function MovieDescription() {
  const [imageLoading, setImageLoading] = useState(true);

  const movie = {
    title: "Movie 1 (2022)",
    time: "1h48",
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BODRlNTY5ZjktZjE0Ni00YjZhLTk3NTItYzk0ZjYxN2QxMWEzXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_.jpg",
    synopsis:
      "Lorem Ipsum is simply 00s, when an unknownvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    person1: "person1",
    person2: "person2",
    person3: "person3",
    person4: "person4",
    genre: "Action, Familial",
    rate: "80%",
    duration: "1h48",
    role: "generale",
  };

  return (
    <div className="first-part-description">
      <div
        className="container-sm::before"
        style={{
          content: `url("${movie.imageURL}")`,
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
          {movie.title}
        </h2>
        <div>
          <p className="text-white" style={{ margin: "0px" }}>
            {movie.genre}
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
              {movie.duration}
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
            80%
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
          {movie.synopsis}
        </p>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={{ marginRight: "100px" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              {movie.person1}
            </p>
            <p className="text-white">{movie.role}</p>
          </div>
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              {movie.person2}
            </p>
            <p className="text-white">{movie.role}</p>{" "}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "100px" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              {movie.person3}
            </p>
            <p className="text-white">{movie.role}</p>{" "}
          </div>
          <div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "white",
                margin: "0px",
              }}
            >
              {movie.person4}
            </p>
            <p className="text-white">{movie.role}</p>{" "}
          </div>
        </div>
      </div>

      <div className="image" style={{ flex: 1 }}>
        <img
          src={movie.imageURL}
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
