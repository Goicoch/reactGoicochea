import React, {useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";



export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams();

    useEffect(() =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "books");
        
       

    if(categoryId){
       const queryFilter = query(queryCollection, where("genero", "==", categoryId ), 
        
        ) 
        getDocs(queryFilter)
        .then (res => setData(res.docs.map(books => ({id: books.id, ...books.data()}))))
    }else {
        getDocs(queryCollection)
        .then (res => setData(res.docs.map(books => ({id: books.id, ...books.data()}))))  
    }
    },
    [categoryId])

    return (
        
        
            <ItemList data={data} />
            
        
         );
        }
        

export default ItemListContainer;