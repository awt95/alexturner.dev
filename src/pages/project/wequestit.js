import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Carousel, CarouselItem } from "react-bootstrap"



export default () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: {relativeDirectory: { eq: "wequestit" }}) {
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
        <SEO title="WeQuestit" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <h1>WeQuestit</h1>
        <Carousel>
            {data.allFile.edges.map(image =>
                <CarouselItem>
                    <Img fluid={image.node.childImageSharp.fluid}/>
                </CarouselItem>
            )}

        </Carousel>
        <p>
            WeQuestit is an online marketplace for students to outsource their daily tasks<br/>
            Technologies:
            <ul>
                <li>Ruby on Rails</li>
                <li>Stripe</li>
            </ul>
            Demo coming soon...
        </p>
        <Link to="/">Go back</Link>
      </Layout>
    )
}