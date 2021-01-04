import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
const Styled = styled.div`
  background-color: #f0f0ff;
`

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      profile: file(relativePath: { eq: "profile.jpg" }) {
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
      <Container>
        <Row className="py-5">
          <Col className="p-4" lg={4}>
            <Img
              className="mx-auto rounded-circle shadow"
              fluid={data.profile.childImageSharp.fluid}
              style={{ maxWidth: 500 }}
              alt="profile"
            />
            <div className="mx-auto text-center">
              <h4 className="mt-3 color-dark ">Nick Hooton</h4>
              <h6>Clean Haven Owner</h6>
            </div>
          </Col>
          <Col className="p-4" lg={8}>
            <h1 className="text-center color-dark">About</h1>
            <div className="hr-thick mx-auto mb-3 " />
            <p className="text-justify color-dark ">
              Hi! My name is Nick Hooton and I’m the owner of Clean Haven.
              Having lived on the North Shore my entire life and worked in this
              industry for over 5 years I’ve developed a deep understanding of
              my clients' needs. We’re a small company and therefore I’m always
              involved and truly invested in every single job. I always go above
              and beyond to make sure my clients are happy and never leave a job
              site before making sure everyone is pleased with the results. I’m
              so proud of the company I’ve grown and am committed to do the
              absolute best I can in order to please you and uphold our
              reputation.
            </p>
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

export default About
