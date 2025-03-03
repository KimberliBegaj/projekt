import React from 'react';
import { Card, Row, Col } from "react-bootstrap";
import image18 from './image18.png';
import image16 from './image16.png';
import image19 from './image19.png';
import image20 from './image20.png';
import image21 from './image21.png';
import image22 from './image22.png';


function GeneralDentistry() {
    return (
        <>
            <div style={{ marginTop: "150px", marginLeft: "560px", border: "1px solid #76D7EA", textAlign: "center", width: "300px",height:"50px", borderRadius: "25px", backgroundColor: "#f8f9fa", }}>
                <p style={{ fontSize: "30px", color: "#32A5D3", fontWeight: "bold" }}>General Dentistry</p>
            </div>

            <div className='Generaldentistry'>

            <div>

            <div className="container mt-4">
                <Card className="info-card">
                    <Row className="g-0">

                        <Col md={4}>
                            <Card.Img
                                src={image18}
                                alt="image18.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Cleanings & Exams</Card.Title>
                                <Card.Text>
                                    Routine cleanings and exams help you keep your smile healthy for a lifetime.
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
                                src={image16}
                                alt="image16.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Teeth Whitening</Card.Title>
                                <Card.Text>
                                Shine up those pearly whites with professional teeth whitening. In-office and take-home options.
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
                                src={image19}
                                alt="image19.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Dental Fillings</Card.Title>
                                <Card.Text>
                                Repair damaged teeth and cavities and restore the look and function of your smile.
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
                                src={image20}
                                alt="image20.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Gum Treatments</Card.Title>
                                <Card.Text>
                                Treat infections in your gums and mouth tissue and remove plaque and tartar buildup.
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
                                src={image21}
                                alt="image21.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Crowns</Card.Title>
                                <Card.Text>
                                Crowns restore the functionality and appearance of your tooth and are often the last step of a root canal.
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
                                src={image22}
                                alt="image22.png"
                                style={{ width: "100px", height: "100px", marginLeft: "30px" }}

                            />
                        </Col>

                        <Col md={8}>
                            <Card.Body>
                                <Card.Title>Veneers</Card.Title>
                                <Card.Text>
                                Get the smile you’ve always wanted with veneers that seamlessly cover the discolored teeth.
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

export default GeneralDentistry
