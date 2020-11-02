import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Styled = styled.div`
  background-color: #d9d8fa;
  .color-dark {
    color: #180c5b;
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
      title: "Gutter Cleaning",
      des: `
        There’s no short cut to good old-fashioned hard work! I take safety very seriously, 
        using all the best equipment that allows us to complete jobs both safely and effectively.
      `,
      img: data.gutters.childImageSharp.fluid,
    },
    {
      title: "Window Washing",
      des: `
        From the classic squeegee, to advanced water fed poles, my team is 
        fully equipped with all the tools and expertise to handle all your window washing needs.
      `,
      img: data.windows.childImageSharp.fluid,
    },
    {
      title: "Power Washing",
      des: `
        We have the highest quality, industry leading Honda pressure 
        washers rated at 4000 PSI. My team is highly trained at working 
        with these heavy-duty pressure washers`,
      img: data.pressure.childImageSharp.fluid,
    },
  ]

  return (
    <Styled>
      <Container>
        <Row className="py-5">
          {serviceData.map(s => (
            <Col md className="my-1">
              <SummaryItem service={s} />
            </Col>
          ))}
        </Row>
      </Container>
    </Styled>
  )
}

const SummaryItem = ({ service }) => {
  return (
    <div className="p-2">
      <Img className="rounded shadow" fluid={service.img} />
      <div className="text-center mt-3">
        <h3 className="color-dark">{service.title}</h3>
        <p className="color-dark text-justify">{service.des}</p>
      </div>
    </div>
  )
}

export default ServiceSummary
