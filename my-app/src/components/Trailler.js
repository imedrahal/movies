import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ImPlay3 } from "react-icons/im"; // Import the play button icon

import  "../syles/trailer.css"; // Import your CSS file with the play-button class

function Trailers(props) {
  const [imageLoading, setImageLoading] = useState(true);
  const[videos,setVideos]=useState([])
  const { id } = useParams();

  const trailers = [
    {
      title: "Movie 1",
      imageURL:
        "https://media-mcetv.ouest-france.fr/wp-content/uploads/2023/02/the-batman-la-suite-du-film-avec-robert-pattinson-a-une-date-de-sortie-1200-min.jpg",
    },
    {
      title: "Movie 1",
      imageURL:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
    },
    {
      title: "Movie 1",
      imageURL:
        "https://fr.web.img5.acsta.net/pictures/22/02/16/17/42/3125788.jpg",
    },
  ];

  // const fetchMovieVideos= async(id) =>{
  //   const configs = {
  //       headers: {
  //         Authorization:
  //           "Bearer " +
  //           "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q",
  //       },
  //     };
  //     const response = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${id}/videos`,
  //       configs
  //     );
  //     setVideos(response)
  //     // console.log (id,videos,'video')
  // }


  const fetchMovieImage= async(id) =>{
    const configs = {
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q",
        },
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        configs
      );
      setVideos(response.data.posters.slice(0, 3))
      
      // console.log (id,videos,'video')
  }

  useEffect(() => {
    fetchMovieImage(id);
    console.log (id,videos,'video')

}, [id]);
  return (
    <Row className="trailer-videos">
<p className="text-white display-6">Bandes annonces</p>

      {videos.map((movie, movieIndex) => (
        <Col key={movieIndex} md={4} className="mb-5">
          <div style={{ position: "relative" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w185/${movie.file_path}`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
              style={{
                display: imageLoading ? "none" : "block",
                borderRadius: "3px",
                height: "9rem",
              }}
            />
            {imageLoading && (
              <Skeleton height={200} width={100} style={{ display: "block" }} />
            )}
            <div className="play-button-circle">
              <ImPlay3
                className="play-button"
                style={{ fontSize: "2.5rem", color: "white", marginLeft: "7px" }}
              />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Trailers;

//////////// i didn't found video for annonce i got the images of films