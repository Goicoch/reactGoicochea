import React, {useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";

const books = [
    {"id":1, "name":"Harry Potter","imagen":".//imagenes/harry potter.jpg", "price":3200, "autor":"J.K Rowling", "stock":0, "genero":"terror"},
    {"id":2, "name":"El señor de los anillos","imagen":".//imagenes/lordOfTheRings.png","price":4500, "autor":"J.R.R Tolkien", "stock":0, "genero":"fantasia"},
    {"id":3, "name":"Juegos del hambre", "price":5000, "imagen":".//imagenes/JDH.webp","autor":"Suzzanne Collins", "stock":0, "genero":"terror"},
    
  ] 

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(books);
            }, 3000);
            
        });
        getData.then(res => setData(res));
    },
    [])

    return (
        
        <>
        <h1>holaaa</h1>
          <ItemList data={data}/>
        </>
         );
        }
        

export default ItemListContainer;