import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { FaRegCopyright } from "react-icons/fa"
const Styled = styled.div`
  background-color: #4a2e6f;
  color: white;
  font-size: 10px;
`

const Footer = () => {
  return (
    <Styled>
      <Container className="p-2">
        <Row>
          <Col>
            <span className="float-right">
              <FaRegCopyright /> Clean Haven 2020
            </span>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default Footer
