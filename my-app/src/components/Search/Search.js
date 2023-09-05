 import { Button, Col, Container, Form, Row } from "react-bootstrap";
 import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom"; 
 import axios from "axios";

 export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [searchMovies, setsearchMovies] = useState([]);



  const getMovies =  async (search) => {
    const configs = {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTliZjQ0ZGE2ZmE4MmU5YTdkNTc4NDBmNGY2ZWY2YiIsInN1YiI6IjY0ZjIxNzczNzdkMjNiMDEwZDZjNjNhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hTC1vF-ea3Uk80_cDG6v5Ub34zmXaNmYFPSkyu0LS_Q",
      },
    };
    const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  
    const response = await axios.get(url, configs);
    setResults(response.data.results)
    setsearchMovies(response.data.results)
    Filter(searchTerm)
    // console.log(response.data.results,'recherche') ;
  }

   const handleChange=(value)=>{
    setSearchTerm(value)

   }
  const Filter = (event)=>{
    setsearchMovies(results.filter(f=>f.name.toLowerCase().includes(event.target.value)))
    console.log(searchMovies,"rech")
  }

  useEffect(() => {
    getMovies() 
    console.log(searchTerm,"result")
  }, []);
   return (
     <Container>
       <Row>
         <Col>
           <Form className="d-flex">
             <Form.Control
               type="search"
               placeholder="Rechercher un film, un réalisateur, un acteur"
               className="me-2"
               aria-label="Search"
value={searchTerm}
onChange={(e)=>handleChange(e.target.value)}
             />
           </Form>
         </Col>
       </Row>
       <p>The search term is: {searchTerm}</p>
     </Container>
   );
 }
// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleKeyUp = (event) => {
//     if (event.key === "Enter") {
//       console.log("ollaaaaa")
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Recherchez ici"
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//         onKeyUp={handleKeyUp}
//       />
//     </div>
//   );
// };

// export default SearchBar;