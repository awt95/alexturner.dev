import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { SocialIcon } from 'react-social-icons'

const Header = ({ siteTitle }) => (
  <header
    style={{
      //background: `#20232a`,
      textAlign: `center`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        //maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="subtitle">
      <ul>
        <li>&#123; Developer,&nbsp;</li>
        <li>Student,&nbsp;</li>
        <li>Geek &#125;</li>
      </ul>
    </div>
    <div className="socialLinks">
      <ul>
        <li><SocialIcon url="https://linkedin.com/in/alexwturner"/></li>
        <li><SocialIcon url="https://github.com/awt95"/></li>
        <li><SocialIcon url="mailto:alexwilliamturner@gmail.com"/></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
