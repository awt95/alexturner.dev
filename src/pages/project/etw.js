import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Carousel, CarouselItem } from "react-bootstrap"



export default () => {
    const data = useStaticQuery(graphql`
        query ETWImages {
            allFile(filter: {relativeDirectory: { eq: "etw" }}) {
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
        <Layout pageInfo={{ pageName: "ETW Quote System" }}>
        <SEO title="ETW Quote System" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <h1>ETW Quote System</h1>
        <Carousel>
            {data.allFile.edges.map(image =>
                <CarouselItem>
                    <Img fluid={image.node.childImageSharp.fluid}/>
                </CarouselItem>
            )}

        </Carousel>
        <p>
            A proprietary application for managing customers and orders. Developed for
            Essex Tube Windings Ltd. to manage tube quotations and work orders.<br/>
            Technologies used:
            <ul>
              <li>C# .NET</li>
              <li>WPF</li>
              <li>SQL Server</li>
            </ul>
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=pWUO71i5QFQ">See it in action</a>
        </p>
        <p>
          <a href="hireme@alexturner.dev">Contact me</a> for more information.
        </p>
        <Link to="/">Go back</Link>
      </Layout>
    )
}
