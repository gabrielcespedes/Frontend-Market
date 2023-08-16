import { Container } from "react-bootstrap";
const Newsletter = () => {
    return (
        <Container fluid className="text-center my-5 p-3 newsletter">
            <h1>¡Suscríbete!</h1>
            <p>Suscríbete y obtén un cupón de 10% de descuento una vez al mes.</p>
            <Container>
                <input type="email" placeholder="Correo electrónico" />
                <button className="btn-custom-black m-3">Enviar</button>
            </Container>
        </Container>
    );
};

export default Newsletter;