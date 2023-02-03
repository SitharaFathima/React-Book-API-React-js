import React from 'react';

// package
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Book(book) {
  return (
    <>
   
        <BookItems>
        <Imagebox>
            <Links  to = {`/book/${book.id}`} {...book}>
                <Img src = {book.cover_img} alt = "cover" />
            </Links>
        </Imagebox>
        <Text>
            <Links to = {`/book/${book.id}`} {...book}>
                <Name>
                    {book.title}
                </Name>
            </Links>
            <Cover>
                <Litecolor>Author : </Litecolor>
                <Name> {book.author.join(", ")}</Name>  
            </Cover>
            <Cover>
                <Litecolor>Total Editions : </Litecolor>
                <Name> {book.edition_count}</Name>
            </Cover>       
            <Cover>
                <Litecolor>First Publish Year : </Litecolor>
                <Name> {book.first_publish_year}</Name>
            </Cover>
        </Text>
        </BookItems>
        
    
    </>
  )
}

export default Book

const BookItems = styled.div`
    padding: 30px;
    width: 18%;
    background: #fff;
    margin: 0 auto 50px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 15px 0px;
    :hover{
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }
`;
const Imagebox = styled.div`
    width: 100%;
    margin: 0 auto 30px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Text = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Links = styled(Link)`
    margin-bottom: 10px;
    display: block;
`;
const Cover = styled.div`
    margin-bottom: 10px;
`;
const Name = styled.span`
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
`;
const Litecolor = styled.span`
    font-size: 16px;
    margin-bottom: 20px;
`;
