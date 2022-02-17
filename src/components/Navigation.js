import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
    const {currentUser, authenticate, logout} = useAuth();

  return (
      <Navbar variant="dark" bg="secondary" expand="md" className="p-3">
          <Navbar.Brand href="/">Todo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
              <Nav className="mr-auto">
                  {/* <Link to="/login" className="nav-link">Login</Link> */}
                  {currentUser &&
                    <>
                        <Link to="/todos" className="nav-link">Todos</Link>
                        <Link to="/categories" className="nav-link">Categories</Link>
                    </>
                  }
                  <Link to="/bootstrap" className="nav-link">Bootstrap</Link>
                  {currentUser ?
                    <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                    :
                    <Nav.Link onClick={() => authenticate()}>Login</Nav.Link>
                  }
                </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
}
