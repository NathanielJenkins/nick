import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact section for Clean Haven. Call, email or enter your information into the form"
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
