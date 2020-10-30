import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/headerImage"
import Helped from "../components/helped"
import ServiceSummary from "../components/serviceSummary"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <HeaderImage />
      <Helped />
      <ServiceSummary />
      <Contact />
    </Layout>
  )
}

export default IndexPage
