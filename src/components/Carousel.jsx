import { useContext } from "react";
import MyContext from "../my_context";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CarouselImages = () => {
    const { artistsInfo, artworks } = useContext(MyContext);
    const navigate = useNavigate();

        const randomChoose = (dataArray) => {
            const data = [...dataArray]
            const randomSelection= [];
            for (let i = 0; i < dataArray.length; i++) {
                const randomIndex = Math.floor(Math.random() * data.length);
                randomSelection.push(data[randomIndex]);
                data.splice(randomIndex, 1);
            };
            return randomSelection;
            };
    return(

            <Container>        
                <Row xs={1} md={2} lg={2}>
                    <Col>
                    <h3 className="text-center mt-3">Artistas</h3>
                    <Carousel className="fondo">
                    {randomChoose(artistsInfo).map(
                        (element, index) => (

                            <Carousel.Item>
                                <img
                                className="d-block w-100 image"
                                key={index}
                                onClick={() => navigate(`/artist/${element.artist_id}`)}
                                src={element.artist_image}
                                height="400"
                                alt="First slide"/>
                            <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
                                <h3>{element.username}</h3>
                                <p>{element.description}</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    </Col>
                    <Col>
                    <h3 className="text-center mt-3">Ofertas</h3>
                    <Carousel className="fondo">
                    {randomChoose(artworks).map(
                        (element, index) => (

                            <Carousel.Item>
                                <img
                                className="d-block w-100 image"
                                key={index}
                                onClick={() => navigate(`/artwork/${element.product_id}`)}
                                src={element.url_image}
                                height="400"
                                alt="First slide"/>

                            <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px' }}>
                                <h3>{element.username}</h3>
                                <h3>{element.title}</h3>
                                <p>{element.description}</p>
                            </Carousel.Caption>
                            </Carousel.Item>

                        ))}
                    </Carousel>
                    </Col>
                </Row>
            </Container>
    )
}

export default CarouselImages;
