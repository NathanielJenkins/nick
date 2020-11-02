import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Contact from "../components/contact"
const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About />
      <Contact />
    </Layout>
  )
}

export default AboutPage
