import React, { useRef } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { FaEnvelope, FaPhone, FaChild } from "react-icons/fa"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useCallback, useEffect } from "react"
import styled from "styled-components"

const Styled = styled.div`
  background-color: #4a2e6f;
  color: white;
`

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const token = useRef()

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(
    async e => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available")
        return
      }

      token.current = await executeRecaptcha("yourAction")
    },
    [executeRecaptcha]
  )

  const handleSubmit = async e => {
    e.preventDefault()

    var form = document.createElement("form")
    form.method = "POST"
    form.action = "https://getform.io/f/7669118c-5d53-4819-a390-7cf3fa5c1bd1"
    const createInput = (name, type, value) => {
      const input = document.createElement("input")
      input.name = name
      input.type = type
      input.value = value
      form.appendChild(input)
    }

    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    Object.entries(formProps).forEach(([k, v]) => {
      createInput(k, "text", v)
    })

    if (!token.current) token.current = await executeRecaptcha("yourAction")
    createInput("g-recaptcha-response", "text", token.current)

    document.body.appendChild(form)
    form.submit()
    form.remove()
  }

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])
  return (
    <Styled>
      <Container>
        <Row className="py-4">
          <Col>
            <h1 className="text-center">Contact</h1>
            <div
              style={{ backgroundColor: "white" }}
              className="hr-thick mx-auto mb-3 "
            />
          </Col>
        </Row>
        <Row>
          <Col md className="mt-3">
            <h3>
              <FaPhone className="mb-2" /> Phone:{" "}
              <a className="thick" href="tel:6043492280">
                (604) 349-2280
              </a>
            </h3>
          </Col>
          <Col md className="mt-3">
            <h3>
              <FaEnvelope className="mb-2" /> Email:{" "}
              <a className="thick" href="mailto:nick@cleanhaven.ca">
                nick@cleanhaven.ca
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
            <Form onSubmit={handleSubmit}>
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
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter phone"
                />
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
