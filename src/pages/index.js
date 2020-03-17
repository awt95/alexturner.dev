import React from "react"
import { Row, Col, Container, Card, CardGroup, CardColumns, Button } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="index-container">
      <Row>
        <Col>
          <h3>Projects</h3>
          <CardColumns>
            <Card>
              <Card.Title><h4>Wikibot</h4></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">September 2019 - Now</Card.Subtitle>
              <Card.Body>
                A web-based chatbot which answers user questions about Wikipedia articles.
                Implemented using Java and Spring Boot, with DBPedia as its datasource. <br/>
                Currently being developed for my final year dissertation.
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col></Col>
                  <Col>Status: In Development</Col>
                  <Col className="text-right text-muted">
                  <a href="https://github.com/awt95/wikibot"><Button className="btn-sm btn-secondary">Github</Button></a>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Title><h4>WeQuestit</h4></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">June 2018 - June 2019</Card.Subtitle>
              <Card.Body>
                A student startup web application project. Allows students to outsource their
                daily chores and tasks to other student looks to make money.<br/>
                Technologies: Ruby on Rails, Postgresql
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col></Col>
                  <Col>Status: Demo Phase, Inactive</Col>
                  <Col className="text-right text-muted">
                  <Link to="/project/wequestit"><Button className="btn-sm btn-secondary">View</Button></Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Title><h4>ETW Quote System</h4></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Jan 2015 - Now</Card.Subtitle>
              <Card.Body>
                An application to manage a company's quotations, orders, and customers.
                The application performs quotation calculations, manages current and past orders,
                and provides the entire business logic for the client. I was brought on as a freelance
                developer to migrate database and logic from an outdated FoxPro solution.<br/>
                Technologies: C# .NET, SQL Server.
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col></Col>
                  <Col>Status: Production</Col>
                  <Col className="text-right text-muted">
                    <Link to="/project/etw"><Button className="btn-sm btn-secondary">View</Button></Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Title><h4>Resource Booker</h4></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">September 2014 - Now</Card.Subtitle>
              <Card.Body>
                A web application to manage user bookings of resources in a school,
                such as room bookings and IT resources. Client wanted to unify multiple existing systems
                and allow for more control over privileges. <br/> Currently deployed in two local schools. <br/>
                Technologies: PHP, MySQL.
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col></Col>
                  <Col>Status: Deployed</Col>
                  <Col className="text-right text-muted">
                  <Link to="/project/booker"><Button className="btn-sm btn-secondary">View</Button></Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </CardColumns>

        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
