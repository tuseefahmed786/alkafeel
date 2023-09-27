import {React,useEffect,useState} from "react";
import heroImage from "../../assests/heroimage/heroimage.png";
import shops from "../../assests/heroimage/Shop.png";
import "../../style/heroimage.css"
const images = [heroImage,shops,heroImage,shops];

function HeroSection() {

    const [currentImage, setCurrentImage] = useState(null);

  
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [])
   
  return (
    <>
      <div className="heroImage">
        <div className="heroImageAlign ">
          <img src={currentImage?currentImage:heroImage} alt="" srcset="" />
        </div>
        
      </div>
    </>
  );
}

export default HeroSection;
