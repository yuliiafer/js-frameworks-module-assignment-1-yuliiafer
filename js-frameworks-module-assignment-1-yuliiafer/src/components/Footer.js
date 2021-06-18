import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Navbar className="footer" expand="xl" variant="dark" bg="dark">
      <Container>
        <NavLink to="/contact" className="nav-link">
          Contact info:
        </NavLink>
        <p>Copyright, 2021</p>
      </Container>
    </Navbar>
  );
};

export default Footer;
