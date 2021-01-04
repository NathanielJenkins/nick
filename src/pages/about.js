import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Contact from "../components/contact"
const AboutPage = () => {
  return (
    <Layout>
      <SEO
        description="`Hi! My name is Nick Hooton and I’m the owner of Clean Haven. Having lived on the North Shore my entire life and worked in this industry for over 5 years I’ve developed a deep understanding of my clients' needs. We’re a small company and therefore I’m always involved and truly invested in every single job. I always go above and beyond to make sure my clients are happy and never leave a job site before making sure everyone is pleased with the results. I’m so proud of the company I’ve grown and am committed to do the absolute best I can in order to please you and uphold our reputation."
        title="About"
      />
      <About />
      <Contact />
    </Layout>
  )
}

export default AboutPage
