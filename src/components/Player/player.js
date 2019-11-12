import React from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from 'gatsby'
import './player.scss'
import GettingStarted from '../GettingStarted/gettingStarted';

const Player = () => {
    return (
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
                            <Link className="modes-header" to="/player/singleplayer">Single Player</Link>
                        </li>
                        <li className="modes-item">
                            <Link className="modes-header" to="player/multiplayer">Multiplayer</Link>
                        </li>
                    </ul>
                    <hr />
                    </Col>
                </Row>    
            <Row className="justify-content-center">
                <Col>
                </Col>
            </Row>
            <Row>
                <GettingStarted />
            </Row>
            </section>
        </div >
    )
}

export default Player
