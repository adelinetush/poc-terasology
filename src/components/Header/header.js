import React from 'react'
import { Link, graphql, useStaticQuery  } from 'gatsby'
import { Row, Col } from 'reactstrap';

import './header.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <div className="container">
            <section className="section">
                <Row>
                    <Col md="8">
                        <header className="header">
    <Link className="title" to="/">{data.site.siteMetadata.title}</Link>
                            <nav>
                                <ul className="nav-list">
                                    <li className="nav-item">
                                        <Link className="link-header" activeClassName="active-nav-item" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-header" activeClassName="active-nav-item" to="/player">Player</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-header" to="/player">Artist</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-header" to="/player">Modder</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link-header" to="/player">Contributor</Link>
                                    </li>
                                </ul>
                            </nav>
                        </header>
                    </Col>
                </Row>
            </section>
        </div>
    )

}

export default Header
