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
                                    <a className="modes-header" href="https://github.com/MovingBlocks/TerasologyLauncher/releases/download/v3.3.0/TerasologyLauncher.zip">Terasology Launcher</a>
                                </li>
                            </ul>
                            <hr />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md="12" className="centered">
                            <h1>See Templates</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="modes centered">
                            <ul className="modes-list">
                                <li className="modes-item">
                                    <Link className="modes-header" to="/player/singleplayer/templates">Templates</Link>
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
