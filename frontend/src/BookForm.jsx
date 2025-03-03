import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import image27 from './image27.png';
import axios from "axios";
import './Style.css';

function BookForm() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        reasonForVisit: '',
        appointmentDate: '',
        appointmentTime: '',
        medicalConditions: '',
        additionalInformation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        // Dërgo të dhënat në backend
        try {
            await axios.post('http://localhost:5000/api/appointments', formData);
            alert("Appointment booked successfully!");
        } catch (error) {
            alert("There was an error booking the appointment.");
        }
    };

    return (
        <div className="bookform">
            <div style={{
                marginTop: "30px", marginBottom: "40px", marginLeft: "560px", border: "1px solid #76D7EA", textAlign: "center",
                width: "300px", height: "50px", borderRadius: "25px", backgroundColor: "#f8f9fa",
            }}>
                <p style={{ fontSize: "25px", color: "#32A5D3", fontWeight: "bold" }}>Book Appointment</p>
            </div>

            <Card className="appointment-card mx-auto">
                <Card.Img
                    variant="top"
                    src={image27}
                    alt="image27"
                    style={{ width: "100px", height: "100px", marginLeft: "225px" }}
                />
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your full name"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your phone number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Reason for Visit</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter reason for visit"
                                        name="reasonForVisit"
                                        value={formData.reasonForVisit}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="appointmentDate"
                                        value={formData.appointmentDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select Time</Form.Label>
                                    <Form.Control
                                        type="time"
                                        name="appointmentTime"
                                        value={formData.appointmentTime}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Medical Conditions</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="medicalConditions"
                                value={formData.medicalConditions}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Additional Information</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="additionalInformation"
                                value={formData.additionalInformation}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" variant="primary" style={{ borderRadius: "25px", marginLeft: "10px", fontFamily: "coursive", color: "white", borderColor: "#76D7EA", backgroundColor: "#76D7EA", padding: "10px 25px", fontSize: "20px" }}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookForm;
