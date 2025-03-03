import React from 'react';
import { Card, Row, Col } from "react-bootstrap";
import image22 from './image22.png';
import image23 from './image23.png';
import image24 from './image24.png';
import image13 from './image13.png';


function SurgicalCare() {
    return (
        <>
        
        <div style={{ marginTop: "150px", marginLeft: "560px", border: "1px solid #76D7EA", textAlign: "center", width: "300px",height:"50px", borderRadius: "25px", backgroundColor: "#f8f9fa", }}>
                <p style={{ fontSize: "30px", color: "#32A5D3", fontWeight: "bold" }}>Surgical Care</p>
            </div>

            <div className='Surgicalcare'>

                <div>

                <div className="container mt-4">
                <Card className="info-card">
                    <Row className="g-0">

                        <Col md={4}>
                            <Card.Img
                                src={image23}
                                alt="image23.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Tooth Removal</Card.Title>
                                <Card.Text>
                                We have the expertise to comfortably problematic teeth so you can take back your smile.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>

            <div className="container mt-4">
                <Card className="info-card">
                    <Row className="g-0">

                        <Col md={4}>
                            <Card.Img
                                src={image13}
                                alt="image13.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Implants</Card.Title>
                                <Card.Text>
                                The gold standard for replacing missing or damaged teeth. Put our expertise to work for your smile.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>


                </div>

                <div>
                <div className="container mt-4">
                <Card className="info-card">
                    <Row className="g-0">

                        <Col md={4}>
                            <Card.Img
                                src={image22}
                                alt="image22.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Implant-Retained Dentures</Card.Title>
                                <Card.Text>
                                The modern denture solution. Great for your health and lifestyle! Replace one or several teeth.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>

            <div className="container mt-4">
                <Card className="info-card">
                    <Row className="g-0">

                        <Col md={4}>
                            <Card.Img
                                src={image24}
                                alt="image24.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Emergency Dentistry</Card.Title>
                                <Card.Text>
                                We’re here for you when you need us most. Get in touch for fast, reliable care.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </div>




                </div>






            </div>
        

        </>
    )
}

export default SurgicalCare
