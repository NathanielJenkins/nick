import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceSummary from "../components/serviceSummary"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ServiceSummary />
      <Contact />
    </Layout>
  )
}

export default IndexPage
