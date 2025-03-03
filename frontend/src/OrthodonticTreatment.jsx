import React from 'react'
import { Card, Row, Col } from "react-bootstrap";
import image17 from './image17.png';
import image26 from './image26.png';
import image25 from './image25.png';


function OrthodonticTreatment() {
    return (
        <>

            <div style={{ marginTop: "150px", marginLeft: "560px", border: "1px solid #76D7EA", textAlign: "center", width: "300px", height: "50px", borderRadius: "25px", backgroundColor: "#f8f9fa", }}>
                <p style={{ fontSize: "25px", color: "#32A5D3", fontWeight: "bold" }}>Orthodontic Treatment</p>
            </div>


            <div className='Orthodontic'>

                <div>
                    <div className="container mt-4">
                        <Card className="info-card">
                            <Row className="g-0">

                                <Col md={4}>
                                    <Card.Img
                                        src={image17}
                                        alt="image17.png"
                                        style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                                    />
                                </Col>

                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>Traditional Metal Braces</Card.Title>
                                        <Card.Text>
                                        These are the most common and involve metal brackets.They are typically worn for 18–24 months.
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
                                        src={image17}
                                        alt="image17.png"
                                        style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                                    />
                                </Col>

                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>Ceramic Braces</Card.Title>
                                        <Card.Text>
                                        They are less noticeable than metal braces but still involve the use of wires for tooth movement.
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
                                        src={image17}
                                        alt="image17.png"
                                        style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                                    />
                                </Col>

                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>Lingual Braces</Card.Title>
                                        <Card.Text>
                                        These are placed on the inside (lingual) surfaces of the teeth, making them invisible from the outside.
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
                                    src={image26}
                                    alt="image26.png"
                                    style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                                />
                            </Col>

                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Invisalign (Clear Aligners)</Card.Title>
                                    <Card.Text>
                                    Invisalign uses a series of clear, removable plastic aligners that gradually shift teeth into place.
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
                                    src={image17}
                                    alt="image17.png"
                                    style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                                />
                            </Col>

                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Self-Ligating Braces</Card.Title>
                                    <Card.Text>
                                    These braces use a specialized bracket that doesn’t require elastics to hold the archwire in place.
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
                                    src={image25}
                                    alt="image25.png"
                                    style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                                />
                            </Col>

                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Retainers</Card.Title>
                                    <Card.Text>
                                    They are worn after braces or aligner treatment to prevent the teeth from turning in back position.
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

export default OrthodonticTreatment
