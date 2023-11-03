import { Carousel } from 'react-carousel-minimal';
import Cartoon from '../../public/Images/cartoon.jpg';
import Sell from '../../public/Images/sell.jpg';
import Wallpaper from '../../public/Images/Ecomm.jpg';
function App() {
 const data = [
    {
      image: Wallpaper,
      caption: "GBMart"
    },
    {
      image: Sell,
      caption: "Become seller"
    },
    {
      image: Cartoon,
      caption: "Buy from store"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={10000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            
            style={{
              textAlign: "center",
            //   width : "1000p",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;