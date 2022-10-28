import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

useEffect(() =>{
    const querydb = getFirestore();
    const querydoc = doc(querydb, "books", "25m83Oq5W06elxmJlUiG");
    getDoc(querydoc)
    .then(res => console.log(res.data()))
},[])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;

//react 11 13.00