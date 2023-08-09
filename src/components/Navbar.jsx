import { Link } from "react-router-dom";
import { useContext } from "react";

import MyContext from "../my_context";

const Navbar = () => {
    const {navTotal, setNavTotal, isLoggedIn, setIsLoggedIn, setUser, artworks, setArtworks} = useContext(MyContext);    

    const Exit = () => {
        setIsLoggedIn(false);
        setUser(null);
        setNavTotal(0);

        const resertArtworks = artworks.map((element) => ({
            ...element,
            amount: 0,
        }));

        setArtworks([...resertArtworks]);
    };

        
    return isLoggedIn ? (
        <div className="navbar bg-secondary fixed-top w-100">            
            <div className="container">
                <div className="navbar-brand">
                    <h5> <Link to="/carrito" className="text-light text-decoration-none"><i class="fa-solid fa-cart-shopping"></i> ${navTotal}</Link></h5>
                </div>
                <div className="navbar-brand">
                    <h5> <Link to="/" className="text-light text-decoration-none"><i class="fa-solid fa-palette"></i></Link></h5>
                </div>                
                <div>
                    <h5><Link to="/busqueda" className="text-light text-decoration-none">Búsqueda</Link></h5>
                
                </div>
                <div>
                    <h5><Link to="Login" className="text-light text-decoration-none">Perfil</Link></h5>
                </div>
                <div>
                    <h5><Link to="/favoritos" className="text-light text-decoration-none">Favoritos</Link></h5>
                </div>
                <div className="navbar-brand">
                    <h5> <Link to="/" className="text-light text-decoration-none" onClick={() => Exit()}><i class="fa-solid fa-right-from-bracket"></i></Link></h5>
                </div>                                                
            </div>            
        </div>
        
    ) : (<div className="navbar bg-secondary fixed-top w-100">
            <div className="container">                
            <div className="navbar-brand">
                <h5> <Link to="/" className="text-light text-decoration-none"><i class="fa-solid fa-palette"></i></Link></h5>
            </div>            
            <div>
                <h5><Link to="/busqueda" className="text-light text-decoration-none">Búsqueda</Link></h5>
            </div>
            <div>
                <h5><Link to="Registro" className="text-light text-decoration-none">Registro</Link></h5>
            </div>
            <div>
                <h5><Link to="Login" className="text-light text-decoration-none">Inicio de Sesión</Link></h5>
            </div>                                                
        </div>            
    </div>
    )
}

export default Navbar;