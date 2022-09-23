
import './App.css';
import NavBar from './/components/NavBar';
import './components/CartWidget.js';
import  ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <div>
   <NavBar/>
   <ItemListContainer greeting="pedro"/>
   </div>
   
  );
}

export default App;
 