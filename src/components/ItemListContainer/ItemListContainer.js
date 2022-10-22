import React, {useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const books = [
    {"id":1, "name":"Harry Potter","imagen":".//imagenes/harry potter.jpg", "price":3200, "autor":"J.K Rowling", "stock":0, "genero":"terror"},
    {"id":2, "name":"El señor de los anillos","imagen":".//imagenes/lordOfTheRings.png","price":4500, "autor":"J.R.R Tolkien", "stock":0, "genero":"fantasia"},
    {"id":3, "name":"Juegos del hambre", "price":5000, "imagen":".//imagenes/JDH.webp","autor":"Suzzanne Collins", "stock":0, "genero":"terror"},
    {"id":4, "name":"Animales fantasticos", "price":5000,"imagen":".//imagenes/animales fantasticos.jpeg", "autor":"J.K Rowling", "stock":5, "genero":"terror"},
    {"id":5, "name":"El gato negro", "price":3500,"imagen":".//imagenes/el gato negro.jpg", "autor":"Edgar Allan Poe", "stock":12, "genero":"fantasia"},
    {"id":6, "name":"El hobbit", "price":4500,"imagen":".//imagenes/el hobbit.jpg", "autor":"J.R.R Tolkien", "stock":17, "genero":"fantasia"},
    {"id":7, "name":"La naranja mecanica", "price":3900,"imagen":".//imagenes/la naranja portada.jpg", "autor":"Antony Burgess", "stock":20, "genero":"terror"},
    
  ] 

export const ItemListContainer = ({texto}) => {
    
    
    
    const [data, setData] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(books);
            }, 1500);
            
        });
    if(categoryId){
        getData.then(res => setData(res.filter(books => books.genero ===categoryId)));
    }else {
        getData.then(res => setData(res));
    }
    },
    [categoryId])

    return (
        
        <>
            <ItemList data={data}/>
            
        </>
         );
        }
        

export default ItemListContainer;