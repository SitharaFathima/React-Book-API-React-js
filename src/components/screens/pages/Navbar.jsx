import React, { useState } from "react";
 
// Icons
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

// packages
import styled from "styled-components";
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Hamburger onClick={() => setIsOpen(!isOpen)} >
                <HiOutlineMenuAlt3 style={{fontSize: "20px"}} />
            </Hamburger>
            <Nav animation={!isOpen ? "slide-top" : "slide-bottom"|isOpen ? "slide-bottom" : "slide-top"}>
                <Menu isOpen={isOpen}>
                    <MenuLink to="home">Home</MenuLink>
                    <MenuLink to="amenities">About</MenuLink>
                </Menu>
            </Nav>
        </>
    );
};

export default Navbar;

const Hamburger = styled.button`
    width: 100px;
    display: block;
    cursor: pointer;
    @media all and (max-width: 640px) {
        width: 60px;
    }
    @media all and (max-width: 480px) {
        width: 50px;
    }
`;
const Nav = styled.div`
    background: rgb(240, 248, 238);
    position: absolute;
    top: -38px;
    width: 100%;
    right: 0;
    @keyframes slide-bottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100px);
    }
}
@keyframes slide-top {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-700px);
    }
}
  animation: ${({ animation }) => animation} .3s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
const Menu = styled.div`
    display: flex;
    position: relative;
    .greenbtn {
        color: #fff;
        background-color: rgb(15, 167, 111);
        padding: 16px 25px;
        border-radius: 4px;
        width: 40%;
        margin: 0 auto;
        @media all and (max-width: 640px) {
            width: 55%;
        }
        @media (max-width: 360px){
           width: 65%;
        }
    }
    @media all and (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.5s ease-in;
        width: 100%;
        z-index: 7;
    }
`;
const MenuLink = styled(Link)`
    padding-top: 15px;
    cursor: pointer;
    font-family: "dm_sansmedium";
    text-align: center;
    color: #000;
    font-size: 22px;
    margin-bottom: 30px;
    &:hover {
        color: rgb(15, 167, 111);
    }
    @media (max-width: 480px){
       font-size: 16px;
    }
`;







