import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap';
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../../components/Layout/layout'

const Multiplayer = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    console.log(data);
    return (
        <Layout>
            <div className="container">
                <section>
                    <Row className="justify-content-center">
                        <Col md="12" className="centered">
                            <h1>Download the game</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="modes centered">
                            <ul className="modes-list">
                                <li className="modes-item">
                                    <a className="modes-header" href="https://github.com/MovingBlocks/Terasology/blob/develop/docs/Playing.md#multiplayer">Multiplayer Template</a>
                                </li>
                            </ul>
                            <hr />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="12" className="centered">
                            <h1>Join other players</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="modes centered">
                            <ol>
                                {data.allMarkdownRemark.edges.map((edge) => {
                                    return (
                                        <li>
                                            <Link to={`/player/multiplayer/${edge.node.fields.slug}`}>
                                                <h2>{edge.node.frontmatter.title}</h2>
                                                <p>{edge.node.frontmatter.date}</p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ol>
                            <hr />
                        </Col>
                    </Row>
                </section>
            </div>
        </Layout>
    )
}

export default Multiplayer 
