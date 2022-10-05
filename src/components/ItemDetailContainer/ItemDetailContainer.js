import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const book = {"id":3, "name":"Juegos del hambre", "price":5000, "imagen":".//imagenes/JDH.webp","autor":"Suzzanne Collins", "stock":0, "genero":"terror"};

export const ItemDetailContainer =() => {
const [data, setData] = useState({});

useEffect(() =>{
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(book);
        }, 3000);
        
    });
    getData.then(res => setData(res));
},
[])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;