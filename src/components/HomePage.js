import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import headerImage from '../img/hero_page.jpg'

const Styledtitle = styled.h1 `
    font-family: 'Pacifico', cursive;
`

const Styledh2 = styled.h2 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 300; 
    margin-top: 8rem;
    margin-right: 5rem;
`
const Styledmain = styled.main `
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
`

const Styledimg = styled.img `
    width: 700px;
`


const HomePage = function () {

    return (
        <>
        <Styledtitle>Furnish & Florish</Styledtitle>
        <Styledmain>
        {/* h2 */}
        <div>
        <Styledh2>Transform your space, flourish in style</Styledh2>
        {/* link to kitchen items */}
        <button><Link to='/kitchen-dining'>Explore</Link></button>
        </div>
        {/* img */}
        <Styledimg src={headerImage} alt="header-store-img" />
        </Styledmain>
        </>
    )
}

export default HomePage;