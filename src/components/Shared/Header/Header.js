import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut, name } = useAuth();
  return (
    <>
      <Navbar
        style={{ backgroundColor: "rgb(103,73,249)" }}
        sticky='top'
        collapseOnSelect
        expand='lg'
      >
        <Container>
          <Navbar.Brand className='text-warning' href='#home'>
            <i class='fas fa-heartbeat'></i> Home
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-center'>
            <Nav.Link className='text-white' as={HashLink} to='/home#home'>
              Home
            </Nav.Link>
            <Nav.Link className='text-white' as={HashLink} to='/home#services'>
              Services
            </Nav.Link>
            <Nav.Link className='text-white' as={HashLink} to='/about'>
              About
            </Nav.Link>
            <Nav.Link className='text-white' as={HashLink} to='/doctor'>
              Doctor
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant='light'>
                Logout
              </Button>
            ) : (
              <Nav.Link className='text-white' as={HashLink} to='/login'>
                Login
              </Nav.Link>
            )}
            {user?.email && (
              <Navbar.Text className='ps-3 text-white'>
                Welcome {user?.displayName ? user.displayName : name}
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
