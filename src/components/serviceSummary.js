import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegHeart } from "react-icons/fa"

const Styled = styled.div`
  background-color: #f0f0ff;
  // background-color: light-grey;

  .card {
    margin: auto;
    overflow: hidden;
    border-radius: 5px;
    transition: all 0.2s;
    // box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    height: 100%;
    border: 0;
    background: #f0f0ff;
  }

  .card:hover {
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.5);
    transform: translate(0px, -5px);
    .blue-square {
      background: #4a2e6f;
    }
  }
  .blue-square {
    transition: all 0.2s;
    border-radius: 10px 10px 0 0;
    width: 100px;
    height: 15px;
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
        with these heavy-duty pressure washers.`,
      img: data.pressure.childImageSharp.fluid,
    },
    {
      title: "Gutter Cleaning",
      des: `
        There is no short cut to good old-fashioned hard work! We take safety very seriously, 
        using all the best equipment that allows us to complete jobs both safely and effectively.
      `,
      img: data.gutters.childImageSharp.fluid,
    },
  ]

  return (
    <Styled>
      <Container>
        <Row>
          <Col>
            <div className="text-center pt-5">
              <h1 className="color-dark">Our Promise</h1>
              <div className="hr-thick mx-auto mb-3 " />

              <h6>
                We're a local North Vancouver company that is dedicated to
                providing a positive impact to the community. With a small crew
                you know that every experience with Clean Haven will have a
                personal touch.
              </h6>
              <h3>
                <FaRegHeart className="color-dark" />
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="py-3">
          {serviceData.map(s => (
            <Col md className="my-3">
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
    <Card>
      <Img
        alt={service.des}
        className="img-cover rounded"
        fluid={service.img}
      />
      <div className="p-3 text-center">
        <h4 className="color-dark pb-2">{service.title}</h4>
        <p className="color-dark  text-justify">{service.des}</p>
      </div>
      <div className="mx-auto blue-square" />
    </Card>
  )
}

export default ServiceSummary
