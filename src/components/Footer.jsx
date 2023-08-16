import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const Footer = () => {
    return(
        <Container fluid className="bg-dark mt-5 mt-auto" expand="lg">
            <div className="text-center text-light mb-2">©ArteViva Mercado</div>
            <Row xs={2} md={2} lg={3} className="d-flex align-content-center">
                <Col>
                <Navbar className="text-light w-100">
                    <Container>
                        <Nav className="ms-auto flex-column w-100 text-center">
                        <h5>Arteviva.cl</h5>
                        <Nav.Link  className="text-light" href="#">¿Quienes somos?</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Contacto</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Envíos a todo Chile</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Términos del servicio</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Política de reembolso</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Trabaja con nosotros</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                </Col>
                <Col>
                <Navbar className="text-light">
                    <Container>
                        <Nav className="ms-auto flex-column w-100 text-center">
                        <h5>Artistas y Organizaciones asociadas</h5>
                        <Nav.Link  className="text-light" href="#">Centro cultural Alameda</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Jacqueline Staforelli</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Dorothea Lange</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Museo de la educación</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                </Col>
                <Col>
                <Navbar className="text-light">
                    <Container>
                        <Nav className="ms-auto flex-column w-100 text-center">
                        <h5>Categorías</h5>
                        <Nav.Link  className="text-light" href="#">Ilustraciones</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Fotografías</Nav.Link>
                        <Nav.Link  className="text-light" href="#">Pinturas</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                </Col>
            </Row>  
        </Container>
    )
}
export default Footer;