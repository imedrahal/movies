import React, { useState, useEffect } from "react";
import VerticalCarousel from "../components/carousel";
import CommingThisWeekMovies from "../components/comming";
import MostRatedMovies from "../components/mostRayed";
import  ClipLoader  from  "react-spinners/ClipLoader" ;
import '../syles/main-page.css'
function MainPage() {
  const [selectedItem, setSelectedItem] = useState(0);
  const imageLinks = [
    "https://media.licdn.com/dms/image/D4D12AQFqOj3W65oDHA/article-cover_image-shrink_600_2000/0/1672976585399?e=2147483647&v=beta&t=PcsGUCxFS704LdEqVYA69xC8L1BWqDPjV50wmHc-Y6s",
    "https://losttribe.org/app/uploads/2022/11/2022.11.18_The_Calling_web_banner-1536x461.png.webp",
    "https://media.licdn.com/dms/image/D4D12AQHrUZ4oVqaAlA/article-cover_image-shrink_600_2000/0/1673585224911?e=2147483647&v=beta&t=A7E2Ncx_ovKeUWwtjYkBPgnRd-JmOUqfYujPdrgqELQ",
  ];

  const [loading,setLoading]=useState(false)

  const changeImage = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % imageLinks.length);
  };
 
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    
    },3000)
    const interval = setInterval(changeImage, 10000);
    return () => clearInterval(interval);  
  }, []);

  return (
    <div >
    
      { loading? 
      <div style={{marginTop:"11rem",marginLeft:"43rem"}}>
    < ClipLoader 
    color = { "white" } 
    size = { 150 } 
    aria-label = "Loading Spinner" 
    data-testid = "loader" 
  />
  </div> : 
  <div className="main-page">
  <div
  className="container-sm::before"
  style={{
    content: `url("${imageLinks[selectedItem]}")`,
    filter: "blur(70px)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "70%",
    zIndex: -1,
  }}
></div>

<div className="carousel" >
  <VerticalCarousel data={selectedItem} />
</div>

<div className="comming-This-Week">
  <CommingThisWeekMovies />
</div>

<div className="most-rated-movies">
  <MostRatedMovies />
</div>
</div>
  }
     
      
  
    </div>
  );
}

export default MainPage;
