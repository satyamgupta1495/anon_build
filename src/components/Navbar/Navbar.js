import { Navbar, Button, Container, Nav } from "react-bootstrap";
import styles from "../../styles/Style.module.css";
import logo from "../../asset/img/col.png";
const HomeNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Brand href="#home">Anon-TipOff</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.nav && " me-auto ms-auto"}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Anon-tipoff</Nav.Link>
            {/* <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                How to give anonymous tip-off
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          <div className="ms-auto">
            <Button className="m" variant="primary">
              User
            </Button>
            {"   "}
            <Button variant="danger">Official</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
