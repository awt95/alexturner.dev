import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="center">
      <h1>Alex Turner</h1>
      <div className="subtitle">
        <p>
          <ul>
            <li>&#123; Developer,&nbsp;</li>
            <li>Student,&nbsp;</li>
            <li>Geek &#125;</li>
          </ul>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
