import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `grey`,
      marginBottom: `1.45rem`,
    }}
  >
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
        // padding: `1.45rem 1.0875rem`,
      }}
    > */}
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "1em",
            fontFamily: 'PT Sans, sans-serif',
            letterSpacing: "1px"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Nav></Nav>
    {/* </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
