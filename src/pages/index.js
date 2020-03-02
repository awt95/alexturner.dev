import React from 'react'
import styled from "styled-components"
import { SocialIcon } from 'react-social-icons'
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Projects = styled.div `
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProjectItemWrapper = styled.div `
  align-items: center;
  display: flex;
  margin: 0 auto 30px auto;
  flex-direction: column;
`

const Title = styled.h4 `
  margin-bottom: 5px;
`

const Description = styled.div `
  margin-bottom: 5px;
`

const Link = styled.a `
  text-decoration: none;
  text-color: black;
`

const ProjectItem = props => (
  <ProjectItemWrapper>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
    <Link href={props.link}>View</Link>
  </ProjectItemWrapper>
)


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `alex turner`]} />
    <div className="center">
      <div className="header">
        <h1>Alex Turner</h1>
        <div className="subtitle">
          <p className="subtitle">
            <ul>
              <li>&#123; Developer,&nbsp;</li>
              <li>Student,&nbsp;</li>
              <li>Geek &#125;</li>
            </ul>
          </p>
          <p className="social_links">
            <ul>
              <li><SocialIcon url="https://linkedin.com/in/alexwturner"/></li>
              <li><SocialIcon url="https://github.com/awt95"/></li>
              <li><SocialIcon url="mailto:alexwilliamturner@gmail.com"/></li>
            </ul>

          </p>
        </div>
      </div>
      <div className="body">
        <p className="projects">
          <h3>Projects</h3>
          <Projects>
            <ProjectItem
              title="Wikibot"
              description="Chatbot application to answer user queries based on Wikipedia articles. Built using Java, Spring Boot, and DBPedia as datasource."
              link="https://github.com/awt95/wikibot"
            />
            <ProjectItem
              title="WeQuestit"
              description="Student startup project. Web application for students to outsource their daily tasks and chores."
              link="https://github.com/awt95/wequestit-dev"
            />
          </Projects>
        </p>
      </div>

    </div>
  </Layout>
)

export default IndexPage
