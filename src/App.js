import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";

import MyContext from './my_context';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

import UserViewBuyer from './views/UserViewBuyer';
import Home from './views/Home';
import Carrito from './views/Carrito';
import Artwork from './views/Artwork';
import NotFound from "./views/NotFound.jsx";
import Registro from "./views/Registro.jsx";
import Login from "./views/Login.jsx";
import Favoritos from "./views/Favoritos";
import Busqueda from './views/Busqueda';
import DetailArtist from './views/DetailArtist';

import axios from 'axios';

import { getArtworks } from './services/artworksService';
import { getVerifiedArtists } from './services/artistService';
import { getUsers } from './services/usersService';
import { getFavorites } from './services/favoritesService';

function App() {
  // const endpointArtists = "/artistsDB.json";
  const [artworks, setArtworks] = useState([]);
  const [navTotal, setNavTotal] = useState(0); 
  const [artistsInfo, setArtistsInfo] = useState([]);

  const [usersInfo, setUsersInfo] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cartInfo, setCartInfo] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const urlServer = "http://localhost:3000";
  const [reloadData, setReloadData] = useState(false);

  const sustractFunction = async (id) => {
    try {
        const selectedProduct = artworks.filter(e => e.product_id === id);
        const body = {
            "user_id": user.user_id,
            "product_id": selectedProduct[0].product_id
        };
        await axios.put(urlServer+"/cart/sustract", body);

        const artwork_index = artworks.findIndex((element) => element.product_id === id);
        artworks[artwork_index].amount = artworks[artwork_index].amount - 1;
        setArtworks([...artworks]);
        setNavTotal(updatingNavTotal);

        setReloadData(true);
    } catch (error) {
        console.error("Error en petición PUT:", error);
        throw error;
    }
};
const addFunction = async (id, counter = null) => {
    try {
        const selectedProduct = artworks.filter(e => e.product_id === id);
        const body = {
            "user_id": user.user_id,
            "product_id": selectedProduct[0].product_id,
            "price": selectedProduct[0].price,
            "quantity": counter !== null ? counter : undefined
        };
        await axios.post(urlServer+"/cart", body);

        const artwork_index = artworks.findIndex((element) => element.product_id === id);

        if (counter === null) {
          artworks[artwork_index].amount = artworks[artwork_index].amount + 1;
        } else {
          artworks[artwork_index].amount = artworks[artwork_index].amount + counter;
        }
        
        setArtworks([...artworks]);
        setNavTotal(updatingNavTotal);

        setReloadData(true);
    } catch (error) {
      console.error("Error en petición POST:", error);
      throw error;
    }
};

const addOneOrMore = async (id) => {
  try {
      const selectedProduct = artworks.filter(e => e.product_id === id);
      const body = {
          "user_id": user.user_id,
          "product_id": selectedProduct[0].product_id,
          "price": selectedProduct[0].price
      };
      await axios.post(urlServer+"/cart", body);

      const artwork_index = artworks.findIndex((element) => element.product_id === id);
      artworks[artwork_index].amount = artworks[artwork_index].amount + 1;
      setArtworks([...artworks]);
      setNavTotal(updatingNavTotal);

      setReloadData(true);
  } catch (error) {
    console.error("Error en petición POST:", error);
    throw error;
  }
};

const updatingNavTotal = () => {
  //CALCULA EL VALOR TOTAL DEL CARRITO
  let total = 0;
      artworks.forEach((element) => {
          total += element.price * element.amount;
      });
  return total
};



  useEffect(() => {    
    getArtworks()
      .then((data) => {
        const artworksWithAmount = data.map((artwork) => ({
          ...artwork,
          amount: 0,
        }));
        setArtworks([...artworksWithAmount]);
      })
      .catch((error) => console.error('Error al obtener las obras de arte:', error));
    
    getVerifiedArtists()
      .then((data) => {
        const verifiedArtistsWithFavorites = data.map((verified_artist => ({
          ...verified_artist,
          favorites: [],
        })));
        setArtistsInfo([...verifiedArtistsWithFavorites]);        
      })
      .catch((error) => console.error('Error al obtener los artistas verificados:', error));

    getUsers()
      .then((data) => {
        const usersWithFavorites = data.map((user => ({
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          favorites: [],
        })));
        setUsersInfo([...usersWithFavorites]);        
      })
      .catch((error) => console.error('Error al obtener los usuarios:', error));
    
    getFavorites()
      .then((data) => setFavorites(data))
      .catch((error) => console.log('Error al obtener los favoritos:', error));

  }, []);


  
  useEffect(() => {
    if (usersInfo.length === 0 || favorites.length === 0) {
      return;
    }
  
    const usersMap = new Map(usersInfo.map(user => [user.user_id, user]));
  
    favorites.forEach(favorite => {
      const user = usersMap.get(favorite.user_id);
      if (user && user.favorites) {
        user.favorites.push(favorite.product_id);
      }
    });
  
    setUsersInfo(prevUsersInfo =>
      prevUsersInfo.map(user => ({
        ...user,
        favorites: usersMap.get(user.user_id)?.favorites || [],
      }))
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);

  useEffect(() => {
    if (isLoggedIn === true) {
      cartInfo.forEach(element => {
        const id_producto = element.product_id;
        const artwork_index = artworks.findIndex((artwork) => artwork.product_id === id_producto);
        artworks[artwork_index].amount = element.quantity;
        setArtworks([...artworks]);        
    });
    const total = updatingNavTotal();
    setNavTotal(total);
    }
  }, [cartInfo]);


  const estadoCompartido = {artworks, setArtworks, navTotal, setNavTotal, updatingNavTotal, artistsInfo, setArtistsInfo, isLoggedIn, setIsLoggedIn, user, setUser, usersInfo, setUsersInfo, cartInfo, setCartInfo, sustractFunction, addFunction, reloadData, setReloadData};

  return (
    
    <MyContext.Provider value={estadoCompartido}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/> 
          <Route path='/carrito' element={<Carrito />}/>
          <Route path='/busqueda' element={<Busqueda />}/> 
          <Route path='/favoritos' element={<Favoritos />}/> 
          <Route path='/artwork/:id' element={<Artwork />}/> 
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={UserViewBuyer} />
          <Route path="*" element={<NotFound />} />
          <Route path='/artist/:id' element={<DetailArtist />} />
        </Routes>
        <Footer />                  
      </BrowserRouter>  
    </MyContext.Provider>      
  );
}

export default App;
