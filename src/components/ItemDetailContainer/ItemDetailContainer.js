import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {itemId} = useParams();

useEffect(() =>{
    const querydb = getFirestore();
    const querydoc = doc(querydb, "books", itemId);
    getDoc(querydoc)
    .then(res => setData({id: res.id, ...res.data()}))

},[itemId])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;

//react 11 13.00