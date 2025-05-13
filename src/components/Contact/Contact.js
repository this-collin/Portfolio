import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:collincodes9@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="contact-section">
      <Particle style={{ position: "fixed" }} />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              <span className="purple">Contact </span> Me
            </h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ height: "50px", fontSize: "1.2em" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ height: "50px", fontSize: "1.2em" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ fontSize: "1.2em" }}
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit"
                className="d-block mx-auto"
                style={{ 
                  position: "relative",
                  zIndex: 2
                }}
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;