import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { FaEye, FaGripLines, FaRegClock } from "react-icons/fa"

const Styled = styled.div`
  .active {
    background-color: #d9d8fa;
  }
  .grey {
    background-color: none;
  }
`

const ServiceSummary = () => {
  const data = useStaticQuery(graphql`
    query serviceQuery {
      pressure: file(relativePath: { eq: "services/pressure.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gutters: file(relativePath: { eq: "services/gutters.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      windows: file(relativePath: { eq: "services/windows.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const serviceData = [
    {
      title: "Gutters",
      des: "Information A, information B, information C",
      icon: <FaEye />,
      img: data.gutters.childImageSharp.fluid,
    },
    {
      title: "Windows",
      des: "Information A, information B, information C",
      icon: <FaGripLines />,
      img: data.windows.childImageSharp.fluid,
    },
    {
      title: "Pressure Washing",
      des: "Information A, information B, information C",
      icon: <FaRegClock />,
      img: data.pressure.childImageSharp.fluid,
    },
  ]

  //switch the photos with setInterval
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (imageIndex >= serviceData.length - 1) {
        setImageIndex(0)
      } else {
        setImageIndex(imageIndex + 1)
      }
    }, 4000)
  }, [imageIndex, serviceData.length])

  return (
    <Styled>
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-3">Our Services</h2>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="my-auto">
            <Img
              className="shadow rounded mb-4"
              fluid={serviceData[imageIndex].img}
            />
          </Col>
          <Col md={6}>
            {serviceData.map((data, index) => {
              return (
                <SummaryItem
                  data={data}
                  background={index === imageIndex ? "active" : "grey"}
                  key={index}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </Styled>
  )
}

const SummaryItem = ({ data, background, onClick }) => {
  return (
    <Row className="mb-2">
      <Col>
        <div className={`summary-item p-2 rounded ${background}`}>
          <h6>
            <span style={{ color: "#444EA0" }}>
              {data.icon} {data.title}
            </span>
          </h6>
          <span style={{ fontSize: "15px", color: "grey" }}>{data.des}</span>
        </div>
      </Col>
    </Row>
  )
}

export default ServiceSummary
