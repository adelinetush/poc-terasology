import React from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from 'gatsby'
import './gettingstarted.scss'

const GettingStarted = () => {
    return (
        <div className="container">
            <section>
                <Row>
                    <Col md="12">
                        <div>
                            <h1 className="text-center">Getting Started</h1>
                            <hr />
                        </div>
                    </Col>
                </Row>
                <div className="tutorial-videos">
                <Row className="justify-content-center">
                    <Col lg="12">
                    <div className="iframe-box first-box">
                        <h3>Terasology Installation</h3>
                        <iframe
                            src="https://www.youtube.com/embed/MwHd2pSoxzg"
                            title="Terasology Installation Guide"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen
                        />
                    </div>

                    <div className="iframe-box">
                        <h3>The Basics</h3>
                        <iframe
                            src="https://www.youtube.com/embed/FJ6tE-yLId8"
                            title="Terasology Basics"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen
                        />
                    </div>
                    </Col>
                </Row>
                </div>
            </section>
        </div>
    )
}

export default GettingStarted
