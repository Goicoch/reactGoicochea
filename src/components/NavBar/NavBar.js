import './NavBar.css';
import Avatar from '../Avatar/Avatar.js';
import { NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  

    return (
       

<nav  className=" bg-gray-900 shadow-black-xl border-4 border-double border-gray-600 ">

  <div  className="container mx-auto px-0 py-3 md:flex md:justify-between md:items-start">
  <div className="flex justify-between">
    <Avatar/>
      <NavLink to="/"  className="text-gray-800 text-xl font-bold md:text-2xl hover:text-white hover:uppercase px-3 py-2"> GasparInc</NavLink>
      </div>

      <div>
      <div  className="flex md:hidden">
        <button type="button"  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24"  className="h-6 w-6 fill-current" >
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

    
    <div  className="md:flex items-center">
      <div  className="flex flex-col md:flex-row md:mx-6">
      <NavLink to="/category" className="my-1 text-sm text-gray-700 font-medium hover:text-white md:mx-4 md:my-0"  >Categoria</NavLink>
        <NavLink to="/category/terror" className="my-1 text-sm text-gray-700 font-medium hover:text-white  md:mx-4 md:my-0"  >terror</NavLink>
        <NavLink to="/category/fantasia" className="my-1 text-sm text-gray-700 font-medium hover:text-white md:mx-4 md:my-0"  >fantasia</NavLink>
        
        
      </div>

      <CartWidget/>
    </div>
  </div>
</nav>

 
        
    );
}
export default NavBar;