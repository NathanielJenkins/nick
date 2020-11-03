import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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
  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Banner = () => {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fixed(height: 347) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Styled>
      <Container className="p-0" fluid>
        <Row>
          <Col className="mx-auto">
            <Img className="" fixed={data.banner.childImageSharp.fixed} />

            <div className="text-container text-center mx-auto color-white">
              <h1 style={{ fontSize: 70 }} className="thin-12">
                Clean Haven
              </h1>
              <div className="hr-thin-white mx-auto" />
              <h3 className="thin-2 mt-4">House Detailing</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default Banner
