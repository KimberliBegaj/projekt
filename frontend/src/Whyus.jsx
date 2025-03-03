import React from "react";
import "./Style.css";
import video2 from "./videos/video2.mp4"


const whyUsData = [
    { title: "Experienced Professionals", description: "Our skilled and certified dentists provide top-quality care with years of experience." },
    { title: "Personalized Care", description: "Every patient receives customized treatment to meet their specific needs." },
    { title: "Advanced Technology", description: "We use state-of-the-art dental equipment for precise, painless treatments." },
    { title: "Comfortable Environment", description: "Our modern and welcoming clinic ensures a stress-free dental experience." },
    { title: "Flexible Scheduling", description: "Providing immediate care with minimal wait times." },
    { title: "Patient Satisfaction", description: "We prioritize patient comfort, ensuring a seamless and satisfying dental experience." }
];

const WhyUs = () => {
    return (
        <div>

            <div>
                <p style={{marginLeft:"675px",color:"#4D4D4D",fontFamily:"coursive",fontSize:"35px",marginTop:"5px"}}>About Us</p>
                </div>

            <div className="whyus-content">
                <div className="whyus-left">
                    {whyUsData.slice(0, 3).map((item, index) => (
                        <div className="whyus-item" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="whyus-video">
                    <video src={video2} autoPlay loop muted playsInline></video>
                </div>

                <div className="whyus-right">
                    {whyUsData.slice(3, 6).map((item, index) => (
                        <div className="whyus-item" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
        <hr style={{backgroundColor:"#76D7EA",width:"400px",height:"5px",marginLeft:"540px",borderColor:"#76D7EA",marginTop:"40px"}}></hr>
        </div>
        </div>
    );
};

export default WhyUs;