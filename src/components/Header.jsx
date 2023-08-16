import React, { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    const texts = useMemo(() => [
        "Envíos a todo Chile",
        "Paga con tarjetas de débito o crédito",
        "¡Hasta 3 cuotas con débito!",
        "¡Participa por cupones de descuentos al comprar!"
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState(texts[currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % texts.length;
            setCurrentIndex(nextIndex);
            setCurrentText(texts[nextIndex]);
        }, 3000); // Cambia el texto cada 3 segundos

        return () => clearInterval(interval);
    }, [currentIndex, texts]);
    
    
    return(
        <Container fluid className="text-center my-5 fixed-top rotating-banner">
            <p className='mx-auto my-auto'>{currentText}</p>
        </Container>
    )
}
export default Header;