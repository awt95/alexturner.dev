import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Carousel, CarouselItem } from "react-bootstrap"



export default () => {
    const data = useStaticQuery(graphql`
        query BookerImages {
            allFile(filter: {relativeDirectory: { eq: "rbook" }}) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }

            }
            
        }
    `)
    return (
        <Layout pageInfo={{ pageName: "Resource Booker" }}>
        <SEO title="Resource Booker" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <h1>Resource Booker</h1>
        <Carousel>
            {data.allFile.edges.map(image =>
                <CarouselItem>
                    <Img fluid={image.node.childImageSharp.fluid}/>
                </CarouselItem>
            )}

        </Carousel>
        <p>
            A proprietary web application for booking and managing resources and rooms in schools.<br/>
            Currently deployed in two schools: Treetops School, and Little Thurrock Primary School.<br/>
            Technologies used:
            <ul>
              <li>PHP</li>
              <li>MySQL</li>
              <li>XAMPP</li>
            </ul>
        </p>
        <p>
          <a href="hireme@alexturner.dev">Contact me</a> for more information.
        </p>
        <Link to="/">Go back</Link>
      </Layout>
    )
}
