import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Styled = styled.div`
  .grey-text {
    color: grey;
  }
  .small-text {
    font-size: 12px;
  }
  .header-image-container {
    height: 200px;
  }
`

const Banner = () => {
  return (
    <Styled>
      <Container className="mt-4">
        <Row>
          <Col md={{ size: 6, order: 1 }} className="mb-5">
            <div className="text-center">
              <h1 style={{ color: "#444EA0" }} className="display-1">
                Clean Haven
              </h1>
              <h3>House Detailing</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default Banner
