import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Hi !</h1>
    <p>Welcome to my work</p>
    <Link to="/"
    style={{
        color: `black`,
        textDecoration: `none`,
        fontFamily: "sans-serif"
      }}
    >Go back to the homepage</Link>
  </Layout>
)

export default WorkPage
