import React from 'react';
import {Link} from 'react-router';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

export default function NavBar(props){
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">What She THINX</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Hello
        </Navbar.Text>
        <Nav pullRight>
          <NavItem href="/conversations"><Glyphicon glyph="envelope" />  Messages</NavItem>
          <NavDropdown title={<Glyphicon glyph="user" />}>
            <MenuItem href="/logout"><Glyphicon glyph="log-out" />  Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};
