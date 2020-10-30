import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { FaEye, FaCentos, FaBorderStyle } from "react-icons/fa"
const Styled = styled.div`
  background-color: #d9d8fa;
`
const Helped = () => {
  const services = {
    service1: {
      title: "Value 1",
      subtitle: "This is a sub title ",
      icon: <FaCentos size={100} />,
    },
    service2: {
      title: "Value 2",
      subtitle: "This is a sub title",
      icon: <FaEye size={100} />,
    },
    service3: {
      title: "Value 3",
      subtitle: "This is a sub title",
      icon: <FaBorderStyle size={100} />,
    },
  }

  return (
    <Styled className="mt-4 mb-4 pt-4 pb-4">
      <Container>
        <Row>
          <Service data={services.service1} />
          <Service data={services.service2} />
          <Service data={services.service3} />
        </Row>
      </Container>
    </Styled>
  )
}

const Service = ({ data }) => {
  return (
    <Col md className="text-center">
      <h4>{data.title}</h4>
      <p className="text-muted">{data.subtitle}</p>
      {data.icon}
    </Col>
  )
}

export default Helped
