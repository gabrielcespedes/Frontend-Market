import { useContext } from "react";
import MyContext from "../my_context";
import { useEffect} from "react";
import { getCart } from '../services/cartService';



const Carrito = () => {
    const {navTotal, user, cartInfo, setCartInfo, sustractFunction, addFunction, reloadData, setReloadData} = useContext(MyContext);

    // const calculateTotal = () => {
    //     setNavTotal(updatingNavTotal);
    //     return navTotal;
    // };
    useEffect(() => {          
        console.log("EL RELOAD ESTA EN ESTADO (ANTES DE MONTAR componente): "+reloadData);
        getCart(user.user_id)
            .then((data) => {
                const cart = data.map((product => ({
                ...product
            })));
            setCartInfo([...cart]);
        })
        .catch((error) => console.error('Error al obtener informacion desde servidor.', error))
        .finally(() => {
            setReloadData(false);
        });
    }, [reloadData]);   

    return(
        <div className="container bg-light m-5 p-5">
            <h6 className="text-dark">Detalles del pedido:</h6>
            <div className="container bg-white p-3">
                {cartInfo.filter((element) => {
                    if (element.quantity > 0) {
                        return element;
                    }
                }).map((element, index) => {return(
                <div className="d-flex"><p key={index}>
                    <img src={element.url_image} width="100" alt="imagen obra"></img> {element.title}</p> 
                    <p key={index+10} className="ms-auto">{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(element.price * element.quantity)}
                    <button className="btn mx-2" style={{backgroundColor: 'rgba(200, 140, 130, 1)', color: '#fff'}} onClick={() => sustractFunction(element.product_id)}>-</button> <strong>    {element.quantity}</strong> 
                    <button className="btn mx-2" style={{backgroundColor: 'rgba(130, 160, 200, 1)', color: '#fff'}} onClick={() => addFunction(element.product_id)}>+</button> </p> 
                    <hr></hr></div> )})}
                    <div className="text-end">
                        <h3 className="text-dark">Total: {Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(navTotal)}                                      
                        </h3>
                        <button className="btn btn-dark">Ir a Pagar</button>
                    </div>                
            </div>
        </div>
    )
}

export default Carrito;