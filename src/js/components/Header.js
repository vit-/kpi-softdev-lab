import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'><img className='logo' src='/images/logo-dummy.png' /></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href='#'>Main</NavItem>
                        <NavItem eventKey={2} href='#'>About</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
