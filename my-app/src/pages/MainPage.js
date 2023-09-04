import React, { useState, useEffect } from "react";
import VerticalCarousel from "../components/carousel";
import CommingThisWeekMovies from "../components/comming";
import MostRatedMovies from "../components/mostRayed";
import '../syles/main-page.css'

function MainPage() {
  const [selectedItem, setSelectedItem] = useState(0);

  const imageLinks = [
    "https://media.licdn.com/dms/image/D4D12AQFqOj3W65oDHA/article-cover_image-shrink_600_2000/0/1672976585399?e=2147483647&v=beta&t=PcsGUCxFS704LdEqVYA69xC8L1BWqDPjV50wmHc-Y6s",
    "https://losttribe.org/app/uploads/2022/11/2022.11.18_The_Calling_web_banner-1536x461.png.webp",
    "https://media.licdn.com/dms/image/D4D12AQHrUZ4oVqaAlA/article-cover_image-shrink_600_2000/0/1673585224911?e=2147483647&v=beta&t=A7E2Ncx_ovKeUWwtjYkBPgnRd-JmOUqfYujPdrgqELQ",
  ];

  const changeImage = () => {
    setSelectedItem((prevItem) => (prevItem + 1) % imageLinks.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
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
      {/* Carousel Section */}
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
  );
}

export default MainPage;
