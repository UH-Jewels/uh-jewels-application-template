'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import {
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from 'react-bootstrap';
import {
  BoxArrowRight,
  Cart,
  Instagram,
  Lock,
  PersonFill,
  PersonPlusFill,
} from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();

  return (
    <Navbar
      className="footercolor navbar-color navbar-size"
      data-bs-theme="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="custom-center navbar-logo" href="/">
          <Image src="Logo.jpg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <a
            className="navlink-margin-left nav-link-size social-media-link"
            href="https://www.instagram.com/universityjewels?igsh=MWZzMW4yeTNwaGZ5ZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <Nav className="me-auto justify-content-start nav-link-size">
            {currentUser && (
              <>
                <Nav.Link
                  id="add-stuff-nav"
                  href="/productspage"
                  active={pathName === '/productspage'}
                >
                  Shop Jewels
                </Nav.Link>
                {/* <Nav.Link
                  id="list-stuff-nav"
                  href="/shipping"
                  active={pathName === '/productspage'}
                >
                  Shipping
                </Nav.Link> */}
              </>
            )}
            {role === 'ADMIN' && (
              <Nav.Link
                id="admin-stuff-nav"
                href="/admin"
                active={pathName === '/admin'}
              >
                List New Products
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item
                  id="login-dropdown-sign-out"
                  href="/api/auth/signout"
                >
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item
                  id="login-dropdown-change-password"
                  href="/auth/change-password"
                >
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Form>
            <Row className="g-0">
              {/* <Col xs="auto" className="p-0">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="m-0"
                />
              </Col> */}
              {/* <Col xs="auto" className="p-0">
                <Button
                  className="navlink-margin-left nav-link-size m-0"
                  variant="khaki"
                  type="submit"
                >
                  <Search />
                </Button>
              </Col> */}
            </Row>
          </Form>
          <Nav.Link
            className="navlink-margin-left nav-link-size"
            href="/cart"
            active={pathName === '/cart'}
          >
            <Cart />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
