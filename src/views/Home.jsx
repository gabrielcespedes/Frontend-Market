import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import MyContext from "../my_context";

import CarouselImages from '../components/Carousel';

import Heart from '../components/Heart';

import { addFavorite, removeFavorite } from "../services/favoritesService";

const Home = () => {
    const { artworks, user, usersInfo, setUsersInfo, addFunction, isLoggedIn} = useContext(MyContext);

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const handleAddFavorite = async (product_id) => {
        try {
            const result = await addFavorite(product_id, token);
            console.log('Favorito agregado:', result);
        } catch (error) {
            console.error('Error al agregar el favorito:', error);
        }
    };

    const handleRemoveFavorite = async (product_id) => {
        try {
            const result = await removeFavorite(product_id, token);
            console.log('Favorito eliminado:', result);
        } catch (error) {
            console.error('Error al eliminar el favorito:', error);
        }
    };

    const Heart_Click = (id, user_id) => {
        const usersInfo_index = usersInfo.findIndex((e) => e.user_id === user_id);        
        const favoritos = usersInfo[usersInfo_index].favorites;
        const imageToRemoveIndex = favoritos.indexOf(id);

        if (imageToRemoveIndex === -1) {
            usersInfo[usersInfo_index].favorites.push(id);
            setUsersInfo([...usersInfo]);

            handleAddFavorite(id);

        } else {
            usersInfo[usersInfo_index].favorites.splice(imageToRemoveIndex, 1);
            setUsersInfo([...usersInfo]);

            handleRemoveFavorite(id);
        }       
    }

    const Evaluate_Heart = (id, user_id) => {
        const usersInfo_index = usersInfo.findIndex((e) => e.user_id === user_id);        
        const favoritos = usersInfo[usersInfo_index].favorites;
        if (favoritos.includes(id)) {
            return true;
        } else {
            return false;
        }   
    }

    return(
        <div className="pt-5">
            <CarouselImages></CarouselImages>
            <div className="row w-100 mt-5">
                {artworks.map(
                    (element, index) => (
                        <div key={index} className='col-12 col-md-6 col-xl-3'>
                            <div className='card m-auto my-4 tarjeta'>
                                <div className="foto" style={{backgroundImage: `url(${element.url_image})`}} onClick={() => navigate(`/artwork/${element.product_id}`)} >                                                                     
                                </div>                                
                                <div className="card-body">
                                    <h5 className="d-flex justify-content-between">{element.title} {user != null && <Heart filled={Evaluate_Heart(element.product_id, user.user_id)} onClick={() => Heart_Click(element.product_id, user.user_id)}></Heart>
                                    }   </h5>
                                    <hr></hr>
                                    <p>{element.description}</p>
                                    <div className="d-flex justify-content-around">
                                        {isLoggedIn && <button onClick={() => addFunction(element.product_id)} className="btn btn-secondary">Añadir <i class="fa-solid fa-cart-shopping"></i></button>}                                        
                                        <button className="btn" >Value: ${element.price}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </div>
    )

}
export default Home;