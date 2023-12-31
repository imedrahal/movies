
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  FormControl,
  InputGroup,
  Button,
  ListGroup,
} from "react-bootstrap";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q", // Replace with your TMDb API key
            },
          }
        );

        setSearchResults(response.data.results.slice(0, 10)); // Limit to max 10 results
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ position: "relative", zIndex: 99999 }}>
      <Form className="d-flex">
        <InputGroup>
          <FormControl
            type="search"
            placeholder="Rechercher un film, un réalisateur, un acteur"
            aria-label="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
      </Form>

      <ListGroup
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          zIndex: 99999,
          maxHeight: "300px",
          overflowY: "auto",
        }}
      >
        {searchResults.slice(0, 5).map((movie) => (
          <ListGroup.Item key={movie.id}>
            <div className="d-flex align-items-center">
              <a
                href={`description/${movie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  style={{ height: "7rem", width: "5rem" }}
                  src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </a>
              <a
                href={`description/${movie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ marginLeft: "1rem" }}>
                  {movie.title}
                  <br />
                  2023{" "}
                </div>
              </a>
            </div>
          </ListGroup.Item>
        ))}
    { searchResults.length > 0 && (
  <ListGroup.Item>
    <a
      href={`search?searchTerm=${searchTerm}`} 
      style={{ textDecoration: "none", color: "inherit", marginLeft: "30%" }}
    >
      Voir tous les résultats
    </a>
  </ListGroup.Item>
)}

      </ListGroup>
    </div>
  );
}