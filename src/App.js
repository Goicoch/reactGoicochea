
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/CartWidget/CartWidget.js';
import  ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <ItemListContainer/>} />
      <Route path="/category/" element={ <ItemListContainer/>} />
      <Route path="/category/:categoryId" element={ <ItemListContainer/>} />
      <Route path="/cart" element={ <Cart/>} />
      <Route path="/item/:itemId" element={ <ItemDetailContainer/>} />
      
    </Routes>
  
    </BrowserRouter>
   
   </div>
   
  );
}

export default App;
 