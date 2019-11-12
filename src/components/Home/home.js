import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'reactstrap';
import logo from '../../../static/images/logo.png'

import './home.scss'

const Home = () => {
    return (
        <div className="container">
            <Row className="justify-content-center">
                <Col md="12" className="options">
                    <img className="home-title" src={logo} alt="Logo" />
                    <ul className="options-list">
                        <li className="options-item">
                            <Link className="options-header" to="/player">Player</Link>
                        </li>
                        <li className="options-item">
                            <Link className="options-header">Artist</Link>
                        </li>
                    </ul>
                    <ul className="options-list">
                        <li className="options-item">
                            <Link className="options-header">Modder</Link>
                        </li>
                        <li className="options-item">
                            <Link className="options-header">Contributor</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Home
