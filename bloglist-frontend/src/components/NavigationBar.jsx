import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavigationBar = ({ user, handleLogout }) => {
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Blog App</Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
          </Nav>

          {user && (
            <div className="d-flex align-items-center">
              <span className="nav-user">{user.name} logged-in</span>
              <Button
                variant="outline-light"
                size="sm"
                className="nav-logout-btn"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
