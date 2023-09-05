import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../syles/search-card.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../syles/casting.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowRightShort } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from 'bootstrap'
import "../syles/search-card.css";

function Casting() {
  const [imageLoading, setImageLoading] = useState(true);
  const [cast, setCast] = useState([]);
  const [numberOfNamesToDisplay, setNumberOfNamesToDisplay] = useState(10);
  const { id } = useParams();
  const [renderedNames, setRenderedNames] = useState([]);

  const getCast = async (id) => {
    const configs = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q",
      },
    };

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      configs
    );
    setCast(response.data.cast)
    // setRenderedNames(response.data);
    console.log(response.data.cast, 'clggggg')
  };



  useEffect(() => {
    getCast(id)
    console.log(renderedNames, "dvgdgdcgdcfd")
    List(cast)
  }, [id]);
  // const cast = useSelector((state) => state.description.casts.items);
  // const first11Objects = cast?.cast?.slice(0, 11);


  // const renderedNames = cast.slice(0, numberOfNamesToDisplay);

  const List = async (cast) => {
    const renderedNames = await cast.slice(1, numberOfNamesToDisplay);
    console.log(renderedNames, "listtttt")
    // return (
    //   <ul>
    //     {renderedNames.map((cast,index) => (
    //       <li key={index}>{cast}</li>
    //     ))}
    //   </ul>
    // );
  };

  const Button = () => {
    return (
      <button onClick={() => setNumberOfNamesToDisplay(cast.length)}>
        Voir tous
      </button>
    );
  };


  return (
    <div className="casting-rows">
      <p className="text-white display-6">Casting</p>
      {/* <ul>
        {(cast.slice(1, numberOfNamesToDisplay)).map((act,index) => (
          <li style={{color:"white"}} key={index}>{act.name}</li>
        ))}
      </ul>
      {cast.length > numberOfNamesToDisplay && (
        <Button >Voir tous</Button>
      )} */}
      {/* <img src={`https://image.tmdb.org/t/p/w185/${image.profile_path}`} alt={image.alt} /> */}

      <div className="container"  >
        <div className="row" style={{ marginTop: "5rem", marginLeft: "-10rem" }}>
          {(cast.slice(1, numberOfNamesToDisplay)).map((image) => (
            <div className="col-md-2" key={image.cast_id} >
              {image?.profile_path ? ( 
              <div class="fade-in-image">
              <img src={`https://image.tmdb.org/t/p/w185/${image.profile_path}`}  style={{marginBottom:"1rem", height:"10rem", width:"10rem",borderRadius:"20%",cursor: "pointer" }} alt={image.cast_id} 
              />
             </div>
) :( <Skeleton
            height="10rem"
            width="10rem"
            borderRadius="20%"
            className={`skeleton wave-animation ${imageLoading ? "hidden" : ""
              }`}
          />)}
           <h6 style={{color:"white"}}>name: {image.name} </h6>  
              {/* <h6 style={{color:"white"}}>name character: {image.character} </h6> */}
          {/* <img src={`https://image.tmdb.org/t/p/w185/${image.profile_path}`}  style={{marginBottom:"1rem" }} alt={image.cast_id} /> 
<h6 style={{color:"white"}}>name: {image.name} </h6> 
<h6 style={{color:"white"}}>name character: {image.character} </h6>         */}
</div>
        ))}
          {cast.length > numberOfNamesToDisplay && (
            <Button >Voir tous</Button>
          )}
        </div>
      </div>

      {/* <div>
      <h1>Names</h1>
      <List names={cast} />
      <Button />
    </div> */}
      {/* {first11Objects?.map((movie, movieIndex) => (
        <Col key={movieIndex} md={2} className="mb-5">
          {movie?.profile_path ? (
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w185/${movie?.profile_path}`}
              onLoad={() => setImageLoading(false)}
              onError={() => setImageLoading(false)}
              className="casting-imgs"
            />
          ) : (
            <Skeleton
              height="9rem"
              width="9rem"
              className={`skeleton wave-animation ${
                imageLoading ? "hidden" : ""
              }`}
            />
          )}

          <Card.Body>
            <Card.Title style={{ color: "white", fontSize: "20px" }}>
              {movie?.original_name}
            </Card.Title>
            <Card.Text style={{ color: "grey" }}>{movie.character}</Card.Text>
          </Card.Body>
        </Col>
      ))}

      <Col md={2} className="pt-5">
        <p style={{ color: "white", cursor: "pointer" }}>
          Voir tout <BsArrowRightShort color="white" fontSize={25} />
        </p>
      </Col> */}
    </div>
  );
}

export default Casting;







