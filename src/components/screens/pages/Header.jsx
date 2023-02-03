import React from 'react';
// package
import styled from 'styled-components';

// images
import Bgimg from "../../assets/images/library-img.jpg";

// components
import SearchForms from './SearchForms';

function Header() {
  return (
    <> 
        <Container id='home'>
            <Head>
                <Main>
                    <Heading>Find Your Book of Choice.</Heading>
                    <Description>" Books are a uniquely portable magic. "</Description>
                    <Name>STEPHEN KING</Name>
                    <SearchForms />
                </Main>
            </Head>
        </Container>
    </>
  )
}

export default Header

const Container = styled.section`
`;
const Head = styled.div`
`;
const Main = styled.div`
    padding-top: 300px;
    text-align: center;
    height: 100vh;
    background: linear-gradient(rgba(141, 39, 174, 0.3), rgba(141, 39, 174, 0.5)), url(${Bgimg}) center/cover no-repeat ;
`;
const Heading = styled.h2`
    color: #fff;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 30px;
`;
const Description = styled.p`
    color: #fff;
    font-size: 22px;
    line-height: 1.5em;
    width: 45%;
    margin: 0 auto 20px;
    font-weight: bold;
`;
const Name = styled.h4`
    font-size: 14=8px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
`;