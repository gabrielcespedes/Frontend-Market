import { useContext, useEffect } from "react";
import MyContext from "../my_context";

import { getBuys } from "../services/buysService";

const Buys = () => {
    const { user, buysInfo, setBuysInfo, reloadData, setReloadData } = useContext(MyContext);

    useEffect(() => {
    getBuys(user.user_id)
        .then((data) => {
            const buys = data.map((element =>
                ({
                    ...element
                })));
            setBuysInfo([...buys]);
        }).catch((error) => console.error('Error al obtener información desde servidor.', error)).finally(() => {
            setReloadData(false);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadData]);

    return (
        <div className="container mt-5 pt-5 pb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="border p-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h2 className="mb-2">Compras realizadas</h2>
                                <p className="mb-0">Comprador: {user.username}</p>
                                <p className="mb-0">Correo Electrónico: {user.email}</p>
                            </div>
                        </div>                        
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio Unitario</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buysInfo.filter(
                                    (elemento) => {
                                        if (elemento.paid === true) {
                                            return true;
                                        }
                                        return false;
                                    }                                  
                                ).map((element, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{element.title}</td>
                                            <td>{element.price}</td>
                                            <td>{element.quantity}</td>
                                            <td>{element.price*element.quantity}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>    
                        </table>                        
                    </div>
                    
                </div>
                
            </div>            
        </div>
    )
}

export default Buys;