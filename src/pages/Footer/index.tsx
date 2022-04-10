import React from 'react'
import * as C from './style'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <C.Container>
            <C.Logo>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/1200px-Redux_Logo.png" alt=""/>
                </Link>
            </C.Logo>
            <C.NavigateLinks>
                <C.Menu>
                    <C.MenuNavigation>
                        <Link to="/sobre">About</Link>
                    </C.MenuNavigation>
                    <C.MenuNavigation>
                        <Link to="/portfolio">Porfolio</Link>
                    </C.MenuNavigation>
                    <C.MenuNavigation>
                        <Link to="/contact">contact</Link>
                    </C.MenuNavigation>
                </C.Menu>
            </C.NavigateLinks>
        </C.Container>
    )
}

export default Footer