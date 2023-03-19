import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Item from './Item';

const Styledh2 = styled.h2 `
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    margin: 2.5rem;
;
`
const StyledListItem = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`

const ItemList = function ({items, handleItems, checkIfAdded}) {

    const itemElements = items.map((item) => {
        const isAdded= checkIfAdded(item)
        return <Item key={item.id} item={item} handleItems={handleItems} isAdded={isAdded}/>
    })

    return (
        <>
        <Styledh2>Kitchen & Dining</Styledh2>
        <button><Link to='/basket'>Basket</Link></button>
        <StyledListItem>
            {itemElements}
        </StyledListItem>
        </>
    )
}

export default ItemList;