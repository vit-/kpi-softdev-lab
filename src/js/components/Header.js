import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={process.env.PUBLIC_URL + '/'}>
                            <img className='logo' src='images/logo-dummy.png' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to={process.env.PUBLIC_URL + '/'}>Main</Link></NavItem>
                        <NavItem><Link to={process.env.PUBLIC_URL + '/carorder'}>Car Order</Link></NavItem>
                        <NavItem><Link to={process.env.PUBLIC_URL + '/about'}>About</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
