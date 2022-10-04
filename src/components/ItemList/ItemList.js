import Item from '../Item/Item';
import React from 'react';

const ItemList =  ({ data = [] }) => {

return (
    data.map (books => <Item key={books.id} info={books}/>)
);

}


export default ItemList;