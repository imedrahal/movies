
import React, {useState } from 'react';
import "./style.css";

const data = [
  {im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg", title: 'colone 1', content: 'alooooooooooooooo' },
  {im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg", title: 'colone 2', content: 'alooooooooooooooooo' },
  { im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg",title: 'colone 3', content: 'alooooooooooooooooo' },
  { im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg",title: 'colone 4', content: 'alooooooooooooooooo' },
  { im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg",title: 'colone 4', content: 'alooooooooooooooooo' },
  { im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg",title: 'colone 4', content: 'alooooooooooooooooo' },
  { im:"https://www.enwallpaper.com/wp-content/uploads/2021/07/the-batman-fanart-6322.jpg",title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
  { title: 'colone 4', content: 'alooooooooooooooooo' },
];
   
function Resultes() {
    const [numberOfNamesToDisplay, setNumberOfNamesToDisplay] = useState(6);
   const handleClick = () => {
     setNumberOfNamesToDisplay(data.length)
     console.log(data);
   };
  return (
    <div>   
        <div >
           <h1 className='title' >SO</h1>
           <h2 className='Secondtitle'>
           {data.length} Resultes</h2> 
           </div>
    <div className="grid">
      <div className="container">
        <div className="row">
          {data.slice(0, numberOfNamesToDisplay).map((item, index) => (
            <div className="col " key={index} style={{ margin: '-0.3rem' }}>
                <img className='image' src={item.im} alt="Description of the image" 
                style={{ width: ' 160px', height: '228.571px',marginTop:"1rem" }}
                />
              <h2 className='titlleImage'> {item.title}</h2>
              <p className='filmDuration'>{item.content}</p>
            </div>
          ))}
                 {data.length > numberOfNamesToDisplay && (
         <button style={{  color:'#ffffff',
            opacity: '0.4',
            borderRadius: "8px",
            color: "black"}} onClick={handleClick} >Voir tous</button>
       )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resultes;
