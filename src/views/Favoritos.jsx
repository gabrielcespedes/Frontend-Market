import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from "../my_context";

const Favoritos = () => {
    const { artworks, user} = useContext(MyContext);
    
    const navigate = useNavigate();

    return (
        <div className="row w-100 my-5">
            {artworks.filter((elemento) => {
                if (user.favorites.includes(elemento.product_id)) {
                    return elemento;                    
                }}).map(
                (element, index) => (
                    <div key={index} className='col-12 col-md-6 col-xl-3'>
                        <div className='card m-auto my-4 tarjeta'>
                            <img onClick={() => navigate(`/artwork/${element.product_id}`)} src={element.url_image} alt="imagen obra" className="card-img-top"></img>
                            <div className="card-body">
                                <h5>{element.title}</h5>
                                <hr></hr>
                                <p>{element.description}</p>
                            </div>
                        </div>
                    </div>
                )
            )
            }
        </div>
    )
}

export default Favoritos;