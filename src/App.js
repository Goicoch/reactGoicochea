
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './components/Avatar/Avatar.js';
import  ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from './Context/CartProvider';
import ".//firebase/config";


function App() {
  return (
    <div>
     
    <BrowserRouter>

    
      <CartProvider >
      <NavBar/>
         <Routes>
            <Route path="/" element={ <ItemListContainer/>} />
            <Route path="/category/" element={ <ItemListContainer/>} />
            <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
            <Route path="/cart" element={ <Cart/>} />
        
            <Route path="/item/:itemId" element={ <ItemDetailContainer/>} />
         </Routes>
      </CartProvider>
  
    </BrowserRouter>
    
   </div>
   
  );
}

export default App;
 