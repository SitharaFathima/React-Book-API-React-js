import React from 'react'

// package
import styled from 'styled-components';

// component
import Book from './Book';
import Loading from './Loader';
import { useGlobalContext } from '../../../context..js';

// images
import coverImg from '../../assets/images/cover_not_found.jpg';


const BookList = () => {

  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,

      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <Container id="book">
      <Box>
        <Div>
          <Heading>{resultTitle}</Heading>
        </Div>
        <BookItems>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </BookItems>
      </Box>
    </Container>
  )
}

export default BookList

const Container = styled.section`
  background-color: #f8f9fa;
  padding: 35px;
`;
const Box = styled.div`
`;
const Div = styled.div`
`;
const Heading = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 50px 30px;
`;
const BookItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
