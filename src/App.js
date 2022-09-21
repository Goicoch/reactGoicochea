
import './App.css';
import NavBar from './/components/NavBar';
import './components/CartWidget.js'
import  Greeting  from ".//components/ItemListContainer";

function App() {
  return (
    <div>
   <NavBar/>
   <Greeting name="Lionel" lastname="Messi"/>
   <Greeting name="Lautaro" lastname="Martinez"/>
    </div>
   
  );
}

export default App;
 