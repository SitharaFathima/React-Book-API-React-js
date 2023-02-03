import React from 'react';

// package
import styled from 'styled-components';
import { Link } from "react-scroll";

// components
import Navbar from './Navbar';

function Headermain() {
  return (
    <>
        <Headerbox>
            <MainHead>
                <MainLink to = "/">
                    <Logo src={require("../../assets/images/logo.webp")} />
                </MainLink>
                <MainHeading><SubHead>BOOK WORLD</SubHead></MainHeading>
            </MainHead>
            <Nav>
                <Itembox>
                    <Items>
                        <Item to = "home" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>Home</Item>
                    </Items>
                    <Items>
                        <Item to = "about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>About</Item>
                    </Items>
                </Itembox>
                <Hambergur>
                    <Navbar />
                </Hambergur>
            </Nav>
        </Headerbox>
    </>
  )
}

export default Headermain

const Headerbox = styled.header`
    width: 100%;
    position: fixed;
    z-index: 10000;
    background: rgb(240, 248, 238);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
`;
const MainHead = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`;
const MainHeading = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: blueviolet;
`;
const MainLink = styled(Link)`
    width: 10%;
    display: block;
    margin-right: 15px;
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const SubHead = styled.h1`
    font-size: 20px;
    font-weight: bold;
`;
const Nav = styled.nav`
`;
const Itembox = styled.ul`
    display: flex;
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const Items = styled.li`
    margin-right: 15px;
`;
const Item = styled(Link)`
    cursor: pointer;
    font-size: 20px;
    color: blueviolet;
`;
const Hambergur = styled.div`
    display: none;
    @media all and (max-width: 768px) {
        display: block;
    }
`;