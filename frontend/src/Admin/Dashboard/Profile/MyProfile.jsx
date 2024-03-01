
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Container, Button, Form, Col, Row, Card } from "react-bootstrap";
import axios from "axios";

export default function ViewProfile() {
    const [profileData, setProfileData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        gender: "",
        dateOfBirth: "",
        fullAddress: "",
        country: "",
        city: "",
        state: "",
        zipCode: "",
        interestedCountry: "",
        primaryUniversity: "",
        secondaryUniversity: "",
        interestedCourse: "",
        testScores: "",
        testType: "",
        previousSchoolLevel: "",
        previousSchoolGpa: "",
        graduationDate: "",
        background: "",
        reference: "",
        notes: "",
    });

    const handleDisplay = async (userId) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/student-profile/getById/${localStorage.getItem("userId")}`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Fetched Student Profile:", response.data);

            setProfileData(response.data);
        } catch (error) {
            console.error("Error fetching student profile:", error);
        }
    };

    useEffect(() => {
        const createdStudentId = localStorage.getItem("userId");
        handleDisplay(createdStudentId);
    }, []);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(
                "http://localhost:8080/student-profile/update",
                profileData, // Send the updated profile data in the request body
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Updated Student Profile:", response.data);

            // Optionally, you can handle success feedback or redirect the user
        } catch (error) {
            console.error("Error updating student profile:", error);
            // Optionally, you can handle error feedback
        }
    };

    useEffect(() => {
        // Assuming you have the student ID after creating the profile
        const createdStudentId = localStorage.getItem("userId"); // Replace with the actual student ID
        handleDisplay(createdStudentId);
    }, []); // Fetch student profile on component mount

    const handleInputChange = (field, value) => {
        setProfileData({ ...profileData, [field]: value });
    };

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Student Profile</Card.Title>
                    <Form>
                        {/* Section A */}
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Contact Information</Card.Title>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="firstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.firstName}
                                                onChange={(e) =>
                                                    handleInputChange("firstName", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="middleName">
                                            <Form.Label>Middle Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.middleName}
                                                onChange={(e) =>
                                                    handleInputChange("middleName", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="lastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.lastName}
                                                onChange={(e) =>
                                                    handleInputChange("lastName", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="phoneNumber">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                value={profileData.phoneNumber}
                                                onChange={(e) =>
                                                    handleInputChange("phoneNumber", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="emailAddress">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                value={profileData.emailAddress}
                                                onChange={(e) =>
                                                    handleInputChange("emailAddress", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="gender">
                                            <Form.Label>Gender</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={profileData.gender}
                                                onChange={(e) =>
                                                    handleInputChange("gender", e.target.value)
                                                }
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="dateOfBirth">
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={profileData.dateOfBirth}
                                                onChange={(e) =>
                                                    handleInputChange("dateOfBirth", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="fullAddress">
                                            <Form.Label>Full Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.fullAddress}
                                                onChange={(e) =>
                                                    handleInputChange("fullAddress", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Section B */}
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Address Information</Card.Title>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="country">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.country}
                                                onChange={(e) =>
                                                    handleInputChange("country", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="state">
                                            <Form.Label>State/Province</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.state}
                                                onChange={(e) =>
                                                    handleInputChange("state", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="zipCode">
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.zipCode}
                                                onChange={(e) =>
                                                    handleInputChange("zipCode", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="city">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.city}
                                                onChange={(e) =>
                                                    handleInputChange("city", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Section C */}
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Academic History</Card.Title>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="previousSchoolLevel">
                                            <Form.Label>Previous School Level</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.previousSchoolLevel}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "previousSchoolLevel",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="previousSchoolGpa">
                                            <Form.Label>Previous Education GPA</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={profileData.previousSchoolGpa}
                                                onChange={(e) =>
                                                    handleInputChange("previousSchoolGpa", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="graduationDate">
                                            <Form.Label>Graduation Year</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={profileData.graduationDate}
                                                onChange={(e) =>
                                                    handleInputChange("graduationDate", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="background">
                                            <Form.Label>Background</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.background}
                                                onChange={(e) =>
                                                    handleInputChange("background", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Section D */}
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Education Details</Card.Title>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="interestedCountry">
                                            <Form.Label>Interested Country</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.interestedCountry}
                                                onChange={(e) =>
                                                    handleInputChange("interestedCountry", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="primaryUniversity">
                                            <Form.Label>Primary University</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.primaryUniversity}
                                                onChange={(e) =>
                                                    handleInputChange("primaryUniversity", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="secondaryUniversity">
                                            <Form.Label>Secondary University</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.secondaryUniversity}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "secondaryUniversity",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="interestedCourse">
                                            <Form.Label>Interested Course</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.interestedCourse}
                                                onChange={(e) =>
                                                    handleInputChange("interestedCourse", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Section E */}
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Standardized Test Scores</Card.Title>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="testType">
                                            <Form.Label>Select Test Type</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={profileData.testType}
                                                onChange={(e) =>
                                                    handleInputChange("testType", e.target.value)
                                                }
                                                required
                                            >
                                                <option value="SAT">SAT</option>
                                                <option value="ACT">ACT</option>
                                                <option value="GRE">GRE</option>
                                                <option value="IELTS">IELTS</option>
                                                <option value="PTE">PTE</option>
                                                <option value="Duolingo">Duolingo</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="testScores">
                                            <Form.Label>Your Test Score</Form.Label>
                                            <Form.Control
                                                type="number"
                                                value={profileData.testScores}
                                                onChange={(e) =>
                                                    handleInputChange("testScores", e.target.value)
                                                }
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Section F */}
                        <Card>
                            <Card.Body>
                                <Card.Title>Additional Information</Card.Title>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="reference">
                                            <Form.Label>Reference</Form.Label>
                                            <Form.Control
                                                as="select"
                                                value={profileData.reference}
                                                onChange={(e) =>
                                                    handleInputChange("reference", e.target.value)
                                                }
                                            >
                                                <option value="">Select Reference</option>
                                                <option value="socialMedia">Social Media</option>
                                                <option value="friend">Friend</option>
                                                <option value="television">Television</option>
                                                <option value="newspaper">Newspaper</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="notes">
                                            <Form.Label>Notes</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                value={profileData.notes}
                                                onChange={(e) =>
                                                    handleInputChange("notes", e.target.value)
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <center style={{ marginTop: 30, marginBottom: 30 }}>
                            <Button variant="primary" type="button" onClick={handleUpdate}>
                                Update Profile
                            </Button>
                        </center>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
