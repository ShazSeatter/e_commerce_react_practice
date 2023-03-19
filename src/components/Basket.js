import React from 'react'; 
import styled from 'styled-components';


const StyledItemImg = styled.img `
    max-width: 150px;
    max-height: 150px;
`

const StyledLi = styled.li `
    list-style: none; 

`
const Basket = function ({basketItems}) {

    const basketItemElements = basketItems.map((item, index) => (
        <StyledLi key={index}>
           <StyledItemImg src={require("../img/" + item.image)} alt="" />
           <span>{item.itemName} £{item.price}.00</span>
        </StyledLi>
    ));

    return (
        <div>
            <ul>
                {basketItemElements}
            </ul>

        </div>
    )
}

export default Basket;