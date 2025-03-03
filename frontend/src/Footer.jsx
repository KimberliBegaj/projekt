

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image8 from './image8.png';
import image9 from './image9.png';
import image10 from './image10.png'


const Footer = () => {
    return (
        <footer className="footer bg-light text-dark py-5">
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    {/* Seksioni i mesazhit kryesor */}
                    <Col md={6} >
                        <h3 style={{marginLeft:"40px", color:"#76D7EA"}}>Become a patient for life!</h3>
                        <p style={{marginLeft:"40px"}}>
                            We can't wait to get to know you and provide excellent care.
                            Visit our dental office.
                        </p>
                        <Button variant="primary" style={{ borderRadius: "35px", fontFamily: "coursive", color: "white", borderColor: "transparent", fontWeight: "bold", backgroundColor: "#76D7EA", padding: "10px 25px", marginLeft: "40px" }}>
                            kimberlibegaj.kb@gmail.com
                        </Button>
                    </Col>

                    {/* Seksioni i informacionit të kontaktit */}
                    <Col md={6} className="text-md-end mt-4 mt-md-0">
                        <p style={{ marginLeft: "270px", }}><img src={image8} alt='image8' style={{ width: "40px", height: "35px", }} />
                            Bulevardi Ismail Qemali, Albania
                        </p >
                        <p style={{ marginLeft: "270px", }}><img src={image9} alt='image9' style={{ width: "25px", height: "25px", marginLeft: "5px" }} />   (033) 230149</p>
                        <p style={{ marginLeft: "270px", }}><img src={image10} alt='image10' style={{ width: "30px", height: "30px", marginLeft: "3px" }} /> Monday - Friday 9:00am - 7:00pm</p>
                    </Col>
                </Row>
                <hr className="my-4" />
                <p style={{ textAlign: "center",fontSize:"15px" }}>
                    &copy; {new Date().getFullYear()} Konomi Dental Clinic. All Rights Reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
