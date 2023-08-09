import React, { useState, useContext } from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserViewBuyer from './UserViewBuyer';
import MyContext from "../my_context";

import axios from "axios";

const LoginView = () => {
    const { usersInfo, isLoggedIn, setIsLoggedIn, user, setUser } = useContext(MyContext);

    const [usuarioLocal, setUsuarioLocal] = useState({
        email: "",
        password: ""
    });   

    // // VERSION SOLO FRONTEND - Agregar aquí la lógica para manejar el envío del formulario
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Lógica de inicio de sesión
    //     console.log('Email:', email);
    //     console.log('Password:', password);

    //     // Verificar las credenciales ingresadas con el JSON de artistas
    //     const foundUser = usersInfo.find((user) => user.email === email && user.password === password);

    //     if (foundUser) {
    //         setIsLoggedIn(true);
    //         setUser(foundUser);
    //     } else {
    //         // Mostrar mensaje de error o manejar el inicio de sesión fallido
    //         console.log('Inicio de sesión fallido. Credenciales inválidas.');
    //     }
    // };

    const handleSubmit = ({ target: {value, name} }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuarioLocal, ...field });
    };

    const iniciarSesion = async () => {
        const urlServer = "http://localhost:3000";
        const endpoint = "/auth/login";
        const { email, password } = usuarioLocal;
        try {
            if (!email || !password) return alert("Email y password obligatorias");
            const { data: token } = await axios.post(urlServer + endpoint, usuarioLocal);
            alert("Usuario identificado con éxito.");
            localStorage.setItem("token", token);
            
            const foundUser = usersInfo.find((element) => element.email === email);
            setUser(foundUser);

            //setUser(usuarioLocal);
            
            setIsLoggedIn(true); 

        }   catch ({ response: { data: message } }) {
            alert("Credenciales inválidas");
            console.log(message);
        }
    };

    return isLoggedIn ? (
        <UserViewBuyer user={user} />
    ) : (
        <Container className="d-flex justify-content-center align-items-center flex-column vh-100">
            <h5 className="mb-3">Inicia Sesión</h5>
            <div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        name='email'
                        className='form-control'
                        placeholder="Ingresa tu email"
                        value={usuarioLocal.email}
                        onChange={handleSubmit}
                    />
                </div>

                <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className='form-control'
                        placeholder="Ingresa tu contraseña"
                        value={usuarioLocal.password}
                        onChange={handleSubmit}
                    />
                </div>

                <button onClick={iniciarSesion} className="btn btn-dark mb-3" type="submit">
                    Iniciar Sesión
                </button>
            </div>
        </Container>
    );
};

export default LoginView;
