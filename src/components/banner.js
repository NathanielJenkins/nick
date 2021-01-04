import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Styled = styled.div`
  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
  }
  .banner {
    height: 380px;
  }

  @media only screen and (max-width: 576px) {
    .text-container {
      width: 280px;
    }
  }
`

const Banner = () => {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      banner: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fixed(height: 800) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
            <div className="banner">
              <Img
                className="img-fluid h-100 w-100"
                fixed={data.banner.childImageSharp.fixed}
              />
            </div>

            <div className="text-container mx-auto">
              <Img fluid={data.logo.childImageSharp.fluid} className="" />
              {/* <div className="hr-thin-white mx-auto" />
              <h3 className="thin-2 mt-4">House Detailing</h3> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default Banner
