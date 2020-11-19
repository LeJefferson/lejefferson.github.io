import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Page" />
    <h1>About Page</h1>
    <p>Welcome to page my about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
