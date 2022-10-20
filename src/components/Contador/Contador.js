import React,{useState}from "react" ;

export const Contador = ({ initial , stock, onAdd }) => {
   const [count, setCount] = useState(initial);
   
   const quitar = () => {
    setCount (count - 1);
   }
   const sumar = () => {
    setCount (count + 1);
   }

    return (
        <div>
<button disabled ={count <= 1 } onClick ={quitar} type="button"  className="  btn btn-outline-dark">-</button>
<span>{count}</span>
<button disabled ={count >=stock } onClick ={sumar} type="button"  className="  btn btn-outline-dark">+</button>
    <div>
        <button disabled={stock <= 0} onClick ={() => onAdd(count)} type="button"  className="  btn btn-outline-dark"> Agregar al Carrito</button>
    </div>


</div>
    );	



}

export default Contador;