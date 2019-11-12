import React from 'react'
import '../../styles/index.scss'
import './layout.scss'

import Header from '../Header/header'
import Footer from '../Footer/footer'

const Layout = (props) => {
    return (
        <div className="container">
            <div>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
