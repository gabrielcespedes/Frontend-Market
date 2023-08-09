import {Card, Row, Col, Container} from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'
import { useContext } from "react";
import MyContext from "../my_context";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const DetailArtist = () => {
    const { artistsInfo, artworks } = useContext(MyContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const artistIndex = artistsInfo.findIndex((element) => element.artist_id == id);
    const artistCollection = artworks.filter((element) => element.seller_id == id);

    return (
        <Container className="border p-3 m-4  mt-5">
        <Row xs={1} md={2} lg={2}>
            <Col>
            <Card>
                <Card.Img className="image_no_pointer" src={artistsInfo[artistIndex].artist_image}></Card.Img>
            </Card>
            </Col>
            <Col>
                <Card.Title className='text-left'>{artistsInfo[artistIndex].username}</Card.Title>
                <Card.Text className="my-3 text-left">{artistsInfo[artistIndex].description}</Card.Text>
            </Col>
        </Row>
        <Row>

        <Container className="pt-3">
            <h1 className="text-center h3">Obras del artista</h1>
            <CardGroup>
                {
                    artistCollection.map((element, index) => (
                        <Card 
                        className="bg-light text-white p-2 heart_pointer"
                        onClick={() => navigate(`/artwork/${element.product_id}`)}>
                        <Card.Img 
                        key={index}
                        variant="top"
                        className="artist-collection" 
                        src={element.url_image} />
                        <Card.ImgOverlay>
                        <Card.Title>{element.title}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    ))
                } 
            </CardGroup>
        </Container>
        </Row>
        </Container>
    )
};


export default DetailArtist;