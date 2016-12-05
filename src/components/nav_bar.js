import React from 'react';
import {Link} from 'react-router';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

function NavBar (props) {

  if (!!sessionStorage.jwt) {
    var welcomeMessage = <Navbar.Text>Welcome back!</Navbar.Text>
    var messagesIcon = <li><Link to='/conversations'><Glyphicon glyph="envelope" />  Messages</Link></li>
    var signOutIcon = <MenuItem onClick={props.onLogOutHandler} href="/"><Glyphicon glyph="log-out" />  Sign Out</MenuItem>
  } else {
    var signInIcon = <li><Link to={'/login'}><Glyphicon glyph="log-in" />  Sign In</Link></li>
    var signUpIcon = <li><Link to={'/signup'}><Glyphicon glyph="star" />  Sign Up</Link></li>
  }

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to={'/'}>What She THINX</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {welcomeMessage}
        <Nav pullRight>
          {messagesIcon}
          <NavDropdown id="dropdown" title={<Glyphicon glyph="user" open="false" />}>
            {signInIcon}
            {signUpIcon}
            {signOutIcon}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;
