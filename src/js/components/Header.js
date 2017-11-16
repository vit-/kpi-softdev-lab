import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'><img className='logo' src='images/logo-dummy.png' /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to='/cars'>Cars</Link></NavItem>
                        <NavItem><Link to='/carorder'>Car Order</Link></NavItem>
                        <NavItem><Link to='/about'>About</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
