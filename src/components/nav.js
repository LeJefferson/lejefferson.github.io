import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
    <nav>
        <Link to="/About/"
            style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: "sans-serif"
            }}
        >
            About
      </Link>
        <Link to="/blog/"
            style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: "sans-serif",
                marginLeft: "15px"
            }}
        >
            Blog
      </Link>
        <Link to="/work/"
            style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: "sans-serif",
                marginLeft: "15px"
            }}
        >
            Work
      </Link>
    </nav>
)


//   Nav.propTypes = {
//     siteTitle: PropTypes.string,
//   }

//   Nav.defaultProps = {
//     siteTitle: ``,
//   }

export default Nav
