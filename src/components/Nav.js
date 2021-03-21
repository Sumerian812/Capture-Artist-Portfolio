import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1200px){
        flex-direction: column;
        padding: 2rem 1rem;
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li {
            padding: 0;
        }
        #logo {
            display: inline-block;
            margin: 1rem;
        }
    }
`;

export default Nav;