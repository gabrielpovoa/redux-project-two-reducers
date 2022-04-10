import React from 'react'
import * as C from './style'
import { Link } from 'react-router-dom'

const Header = () => {
    return <>
        <C.Container>
            <C.Menu>
                <C.Logo>
                    <Link to="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/1200px-Redux_Logo.png" alt="" />
                    </Link>
                </C.Logo>
                <C.MenuOrder>
                    <C.MenuList>
                        <Link to="/about">About</Link>
                    </C.MenuList>
                    <C.MenuList>
                        <Link to="/portfolioi">portfolio</Link>
                    </C.MenuList>
                    <C.MenuList>
                        <Link to="/contact">contact</Link>
                    </C.MenuList>
                </C.MenuOrder>
            </C.Menu>
        </C.Container>
    </>
}

export default Header