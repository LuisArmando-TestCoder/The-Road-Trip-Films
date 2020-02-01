import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/projects">
            My Projects 
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact 
          </Link>
        </li>
        <li>
          <Link to="/about">
            About 
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
