import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../syles/vertical-carousel.css";
import AddButton from "./buttons/Regarder";
import InformationButton from "./buttons/information";
import Batman from '../syles/batman.jpg'
const VerticalCarousel = (props) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const imageLinks = [
    "https://losttribe.org/app/uploads/2022/11/2022.11.18_The_Calling_web_banner-1536x461.png.webp",
    "https://losttribe.org/app/uploads/2022/11/2022.11.18_The_Calling_web_banner-1536x461.png.webp",
    "https://media.licdn.com/dms/image/D4D12AQFqOj3W65oDHA/article-cover_image-shrink_600_2000/0/1672976585399?e=2147483647&v=beta&t=PcsGUCxFS704LdEqVYA69xC8L1BWqDPjV50wmHc-Y6s"
  ];

  const titles = ["Batman ", "Sonic ", "Barbie "];

  useEffect(() => {
    setSelectedItem(props.data);
  }, [props.data]);

  return (
    <div className="vertical-carousel-container">
      <div className="vertical-carousel-center">
        <Carousel
          showThumbs={true}
          showStatus={false}
          infiniteLoop={true}
          axis="vertical"
          renderThumbs={() => null}
          selectedItem={selectedItem}
          showArrows={false}
        >
          {imageLinks.map((link, index) => (
            <div key={index}>
              <img
                src={link}
              className="carousel-image-slider"
                alt={`Image ${index + 1}`}
              />
              <div className="image-text">
                <p className="carousel-title">{titles[index]} (2020)</p>
                <div className="image-buttons">
                  <AddButton />
                  <InformationButton />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VerticalCarousel;
