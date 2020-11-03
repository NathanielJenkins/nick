import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaEnvelope, FaPhone, FaChild } from "react-icons/fa"

import styled from "styled-components"

const Styled = styled.div`
  background-color: #4a2e6f;
  color: white;
`

const Contact = () => {
  return (
    <Styled>
      <Container>
        <Row className="pt-4">
          <Col md className="mt-3">
            <h3>
              <FaPhone className="mb-2" /> Phone:{" "}
              <a href="tel:236-818-6557">(236) 818-6557</a>
            </h3>
          </Col>
          <Col md className="mt-3">
            <h3>
              <FaEnvelope className="mb-2" /> Email:{" "}
              <a href="mailto:hootonnickk@hotmail.com">
                hootonnickk@hotmail.com
              </a>
            </h3>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col md className="my-auto">
            <h3>
              <FaChild className="mb-2" />
              Contact us for a free quote!
            </h3>
            <p>
              Please enter your information and we will get back to you right
              away!
            </p>
          </Col>
          <Col md>
            <Form
              action="https://getform.io/f/a4c92a4d-08df-4734-99a8-c0fb162dd16a"
              method="POST"
            >
              <Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  name="message"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default Contact
