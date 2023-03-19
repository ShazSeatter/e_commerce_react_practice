import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.ul `
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin-top: 3rem;
`

const Styledli = styled.li `
    text-decoration: none;
`
const Header = function () {
    return (
        <>
        <nav>
            <StyledNav>
                <Styledli><Link to='/'>Home</Link></Styledli>
                <li>About</li>
                <Styledli><Link to='/kitchen-dining'>Kitchen & Dining</Link></Styledli>
                <li>Contact Us</li>
            </StyledNav>
        </nav>
 
        </>
    )
}

export default Header; 