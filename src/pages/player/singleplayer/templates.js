import React from 'react'
import { Row, Col } from 'reactstrap';

import Layout from '../../../components/Layout/layout'
import '../../../styles/templates.scss'

const BlogPage = () => {
    return (
        <Layout>
            <div className="container">
                <section>
                    <Row className="justify-content-center">
                        <Col md="12" className="centered">
                            <h1>Templates</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="modes centered">
                            <ul>
                                <li>
                                    <a className="template-options" href="https://github.com/Terasology/GooeysQuests" target="_blank">GooeysQuests</a>
                                </li>
                                <p className="templates-li">A module for Terasology that causes a Gooey to randomly spawn around the world, offering the player quests that create structures.
                                </p>
                                <li>
                                    <a className="template-options" href="https://github.com/Terasology/JoshariasSurvival" target="_blank">Josharias Survival</a>
                                </li>
                                <p className="templates-li">The most complex gameplay module there is to be seen (as of beginning of 2019)! Contains several full technology trees and lots of other stuff too.
                                </p>
                            </ul>
                        </Col>
                    </Row>
                </section>
            </div >
        </Layout>
    )
}

export default BlogPage
