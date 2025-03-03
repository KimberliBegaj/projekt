import Carousel from 'react-bootstrap/Carousel';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import './Style.css'



function Karusel() {
    return (
        <>
        <Carousel fade indicators={false} controls={false} interval={3000} pause={false} style={{marginTop:"43px"}}>
            <Carousel.Item > 
                <img src={image1} alt="image1" style={{ width: "100%", height: "700px" }} />
                <Carousel.Caption>
                    <h3>Your Smile, Our Priority</h3>
                    <p>A healthy smile is a reflection of a healthy life !</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image3} alt="image3" style={{ width: "100%", height: "700px" }} />
                <Carousel.Caption>
                    <h3>Your Smile, Our Priority</h3>
                    <p>A healthy smile is a reflection of a healthy life !</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={image2} alt="image2" style={{ width: "100%", height: "700px" }} />
                <Carousel.Caption>
                    <h3>Your Smile, Our Priority</h3>
                    <p>A healthy smile is a reflection of a healthy life !</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
        <div><p style={{marginTop:"10px",marginBottom:"10px",marginLeft:"572px",fontFamily:"Coursive",fontSize:"35px",color:"#4D4D4D"}}>Welcome to Our Clinic</p></div>
        <div>
        <hr style={{backgroundColor:"#76D7EA",width:"400px",height:"5px",marginLeft:"540px",borderColor:"#76D7EA",}}></hr>
        </div>

</>
    );
}



export default Karusel;