import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import image15 from './image15.jpg';
import { useNavigate } from 'react-router-dom';


const AppointmentCard = () => {
    const navigate=useNavigate();
    return (
        <>

<div >
            <p style={{marginTop:"30px",marginBottom:"25px",marginLeft:"650px",fontFamily:"Coursive",fontSize:"35px",color:"#4D4D4D"}}>Appointment</p>
        </div>

<div className="AppointmentCard">
            <div className="d-flex justify-content-center my-4">
                <Card className="custom-card text-white rounded-4 p-4">
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <h4 style={{ textAlign: "center",color:"#76D7EA" }}>Schedule a presential appointment today !</h4>
                            <Button onClick={()=>navigate("/book-form")} style={{ borderRadius: "20px", fontFamily: "coursive", color: "white", borderColor: "#76D7EA", fontWeight: "bold", backgroundColor: "#76D7EA", marginLeft: "125px", padding: "5px 20px", marginTop: "15px" }}>
                                Book Now
                            </Button>
                        </Col>


                        <Col md={6} className="d-flex justify-content-center">
                            <img
                                src={image15}
                                alt="image15.jpg"
                                className="img-fluid rounded-3"
                                style={{ maxHeight: "300px", objectFit: "cover" }}
                            />
                        </Col>
                    </Row>
                </Card>
            </div>
            </div>

            <div><hr style={{backgroundColor:"#76D7EA",width:"400px",height:"5px",marginLeft:"540px",borderColor:"#76D7EA",marginTop:"45px",marginBottom:"45px"}}></hr></div>
        


        </>
    );
};

export default AppointmentCard;