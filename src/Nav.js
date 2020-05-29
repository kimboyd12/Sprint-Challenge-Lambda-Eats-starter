import React from "react";
import styled from 'styled-components';
import Form from "./Form";
import Home from "./Home";
import { NavLink, Link, Redirect } from "react-router-dom";

const Header = styled.h1`
    display:flex;
    font-size: 2rem;
    align-items: center;
    margin-left: 90px;
    font-family: 'Montserrat';
    color: black;
    margin-top: 40px;
`
const Header1 = styled.h1`
    display: flex;
    font-size: 2rem;
    align-items: center;
    font-family: 'Montserrat';
    color: limegreen;
    margin-left: 3px;
    margin-top: 40px;
`
const Navbar = styled.div`
    height: 60px;
    display: flex;
    margin-bottom: 60px;
    align-items: center;
`

const Links = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 70%;
    align-items: center;
    margin-top: 10px;

`

export default function NavBar() {
    return (
        <Navbar>
            <Header>Lambda</Header>
            <Header1>Eats</Header1>
           <Links>
           <NavLink 
            to="/"
            style={{
                color: "black",
                textDecoration: "none",
                paddingRight: "40px",
                fontSize: "1.2rem"
            }}
            activeStyle={{
                color: "black",
                textDecoration: "none",
                paddingRight: "40px",
                fontSize: "1.2rem",

            }}
            >
                Home
            </NavLink>

            <NavLink 
            to="/form"
            style={{
                color: "black",
                textDecoration: "none",
                paddingRight: "40px",
                fontSize: "1.2rem"
            }}
            activeStyle={{
                color: "black",
                textDecoration: "none",
                paddingRight: "40px",
                fontSize: "1.2rem"
            }}
            >
                Order
            </NavLink>

            <NavLink 
            to="/"
            activeStyle={{
                color: "black",
                textDecoration: "none",
                paddingRight: "0px",
                fontSize: "1.2rem"
            }}
            >
                Contact
            </NavLink>

           </Links> 
        </Navbar>
    )
}