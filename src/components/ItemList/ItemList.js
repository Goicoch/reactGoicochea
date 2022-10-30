import Item from '../Item/Item';
import React from 'react';

const ItemList =  ({ data = [] }) => {

return (
    <div className="d-flex justify-content-evenly gx-4 gx-lg-5  row-cols-md-3 ">

   { data.map (books => <Item key={books.id} info={books} />)}
   
    </div>
);

}


export default ItemList;