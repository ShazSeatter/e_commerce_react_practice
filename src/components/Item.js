import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div `
    font-family: 'Montserrat', sans-serif;
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 1;
    height: auto;
    width: 300px;

`

const StyledButton = styled.button `
    border: 1px solid white;
    background-color: white;
    padding: 0.6rem;
    font-size: 18px;
    &:hover {
        background-color: #824e4e;
        color: white;
    }
`
const StyledItemImg = styled.img `
    max-width: 100%;
    max-height: 100%;
`

const StyledParagraph = styled.p `
    font-size: 20px;
`


const Item = function ({item, handleItems, isAdded}) {

    const handleBasket = () => {
        handleItems(item)
    }

    return (
        <>
        <StyledDiv>
        <StyledItemImg src={require("../img/" + item.image)} alt="" />
        <h2>{item.itemName}</h2>
        <StyledParagraph>£{item.price}.00</StyledParagraph>
        <StyledButton onClick={handleBasket}>{isAdded ? "Added To Basket" : "Add to basket"}</StyledButton>
        </StyledDiv>
        </>
    )
}

export default Item;