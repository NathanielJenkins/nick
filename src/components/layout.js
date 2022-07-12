import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Banner from "./banner"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey="6LdgOuMgAAAAAIHk_0fYzcgr06nFXHsKl0DkJVM-">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Banner />

        <main>{children}</main>
        <Footer />
      </GoogleReCaptchaProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
