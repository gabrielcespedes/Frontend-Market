import React, { useState } from 'react';
import { Button, Card, Row, Col, Container, ButtonGroup} from "react-bootstrap";
import { useParams } from "react-router-dom";


import { useContext } from "react";
import MyContext from "../my_context";

const Artwork = () => {
    const { artworks, usersInfo, addFunction, isLoggedIn} = useContext(MyContext);
    const {id} = useParams();
    const [count, setCount] = useState(1)
    
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    let selectedArtwork = artworks[artworks.findIndex((element) => element.product_id === Number(id))];
    let user = usersInfo[usersInfo.findIndex((e) => e.user_id === selectedArtwork.seller_id)];

    const AccordionItem = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };
        return (
            <div className="accordion-item">
            <button className={`accordion-title ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                {title}
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
            </div>
        );
    };

    return(
        <Container className="m-5 p-5">
        <Row xs={1} md={2} lg={2}>
            <Col>
            <div className='image-container'>
                <img alt='imagen de detalle' src={selectedArtwork.url_image}></img>
            </div>
            </Col>
            <Col>
            <Card.Title className='text-left fs-2'>{selectedArtwork.title}</Card.Title>
            <Card.Text className="my-3 text-left"><strong>Artist: {user.username}</strong></Card.Text>
            <Card.Text className="my-3 text-left">{selectedArtwork.description}</Card.Text>
            <Card.Text className='h4 text-left'>{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(selectedArtwork.price)}</Card.Text>
            <h4 className='text-start ms-3'>Formato</h4>
            <Container className="photo-sizes-container">
                <div className="photo-size">14x20cm</div>
                <div className="photo-size">21x30cm</div>
                <div className="photo-size">41x58cm</div>
            </Container>
            {isLoggedIn &&
            <ButtonGroup className='mt-3 pt-4'>
            <Button className="mx-2 bg-light border-dark text-dark" onClick={decrement}>-</Button>
            <h3 className="mx-1">{count}</h3>
            <Button className="mx-2 bg-light border-dark text-dark" onClick={increment}>+</Button>
            <Button variant="dark p-2" onClick={() => addFunction(selectedArtwork.product_id, count)}>Añadir <i class="fa-solid fa-cart-shopping"></i></Button>
            </ButtonGroup>}
            <Container>
                <AccordionItem title="¿Cuánto se demora en llegar mi pedido?">
                    <p>El proceso de preparación demora de 24 a 72 horas hábiles, posteriormente se procederá al envío. Los     envíos se llevan a cabo desde el lunes a el jueves.</p>
                    <p>Las compras efectuadas entre viernes y domingo serán despachadas durante los próximos días habiles   segun los tiempos ya mencionados.</p>
                    <li>Despacho en Santiago: 2 a 5 días hábiles.</li>
                    <li>Despacho en regiones: 2 a 7 días hábiles</li>
                </AccordionItem>
                <AccordionItem title="Medios de pago disponibles">
                    <p>Puedes pagar con transferencia bancaria, débito y hasta 6 cuotas sin interés con tarjetas de crédito     con la seguridad de Webpay.</p>
                </AccordionItem>
                <AccordionItem title="¿Como funcionan los cambios y/o devoluciones?">
                    <li>Si deseas cambiar un producto, háznoslo saber en 30 días y podrás elegir otro.</li>
                    <li>Si algo no está bien con tu producto, como un defecto, tienes 1 año de garantía.</li>
                    <li>Si cambias de opinión y quieres devolverlo, asegúrate de que esté sin usar y en su caja original.</li>
                    <li>Si llegó dañado, nos dices y te ayudamos. Si solo cambias de opinión, podrás obtener un reembolso,  pero los gastos de envío no se reembolsarán.</li>
                </AccordionItem>
                <AccordionItem title="Nuestros términos y condiciones">
                    <li>Registro y protección de datos</li>
                    <li>Medios de pago</li>
                    <li>Política de reembolso</li>
                </AccordionItem>
            </Container>            
            </Col>
        </Row>
        </Container>
    )
}

export default Artwork;

