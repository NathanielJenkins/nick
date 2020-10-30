import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"

import { graphql, useStaticQuery, Link } from "gatsby"

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

const HeaderImage = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      headerImage: file(relativePath: { eq: "header-image.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Styled>
      <Container className="mt-4">
        <Row>
          <Col md={{ size: 6, order: 12 }}>
            <div className="mb-4">
              <Img
                className="mx-auto d-block rounded shadow"
                fixed={data.headerImage.childImageSharp.fixed}
              />
            </div>
          </Col>
          <Col md={{ size: 6, order: 1 }} className="my-3 my-auto">
            <h2>Company Name</h2>
            <h6>
              Company descriptions, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </h6>
            <hr />
            <p className="grey-text">
              Cras tristique tristique fringilla. Aenean vel sagittis erat.
              Donec porttitor pretium nulla fermentum efficitur.
            </p>

            <Link className="btn btn-danger" to="/contact">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default HeaderImage
