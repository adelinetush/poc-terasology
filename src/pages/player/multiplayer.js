import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap';

import Layout from '../../components/Layout/layout'
import GettingStarted from '../../components/GettingStarted/gettingStarted';

const AboutPage = () => {
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
                                    <a className="modes-header" href="https://github.com/Terasology/StructureTemplates">Multiplayer Template</a>
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
                            <ul className="modes-list">
                                <li className="modes-item">
                                    <Link className="modes-header" to="/player/multiplayer/host">Host a Server</Link>
                                </li>
                                <li className="modes-item">
                                    <Link className="modes-header" to="/player/multiplayer/join-server">Join a Server</Link>
                                </li>
                            </ul>
                            <hr />
                        </Col>
                    </Row>
                </section>
            </div >
        </Layout>
    )
}

export default AboutPage 
