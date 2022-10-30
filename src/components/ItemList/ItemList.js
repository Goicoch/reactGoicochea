import Item from '../Item/Item';
import React from 'react';

const ItemList =  ({ data = [] }) => {

return (
    <div className="flex flex-wrap justify-between">

   { data.map (books => <Item key={books.id} info={books} />)}
   
    </div>
);

}


export default ItemList;