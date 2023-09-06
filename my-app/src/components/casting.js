import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../syles/search-card.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../syles/casting.css";
import { useParams } from "react-router-dom";
import axios from "axios";


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
  

  const List = async (cast) => {
    const renderedNames = await cast.slice(1, numberOfNamesToDisplay);
    console.log(renderedNames, "listtttt")
   
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







