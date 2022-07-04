import { Container, Nav,Navbar, NavDropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navibar() {
return( 
<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
  <Container>
  <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <NavDropdown href="/supplements" title="Supplemente" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/supplements/sleep">Action</NavDropdown.Item>
        </NavDropdown>
    <Nav.Link href="/info">Info</Nav.Link>
  </Nav>
  </Container>
</Navbar>
)
}