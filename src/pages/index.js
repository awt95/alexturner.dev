import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Alex Turner</h1>
    <p>Welcome to my Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
