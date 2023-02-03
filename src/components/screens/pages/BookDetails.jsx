import React, {useState, useEffect} from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

// package
import styled from 'styled-components';

// components
import Loading from './Loader';
import coverImg from '../../assets/images/cover_not_found.jpg';

// icons
import {FaArrowLeft} from "react-icons/fa";


const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <Detail>
        <Detailbox>
            <Button type='button' onClick={() => navigate("/book")}>
                <FaArrowLeft size = {22} />
                <Span>Go Back</Span>
            </Button>
            <DetailItem>
                <Imagebox>
                    <Img src = {book?.cover_img} alt = "cover img" />
                </Imagebox>
                <Description>
                    <Cover>
                        <Titlemain>{book?.title}</Titlemain>
                    </Cover>
                    <Cover>
                        <Title>{book?.description}</Title>
                    </Cover>
                    <Cover>
                        <Titlelite>Subject Places: </Titlelite>
                        <Title>{book?.subject_places}</Title>
                    </Cover>
                    <Cover>
                        <Titlelite>Subject Times: </Titlelite>
                        <Title>{book?.subject_times}</Title>
                    </Cover>
                    <Cover>
                        <Titlelite>Subjects: </Titlelite>
                        <Title>{book?.subjects}</Title>
                    </Cover>
                </Description>
            </DetailItem>
      </Detailbox>
    </Detail>
  )
}

export default BookDetails

const Detail = styled.section`
  background-color: #f8f9fa;
  padding: 5% 12%;
`;
const Detailbox = styled.section`
 
`;
const Button = styled.section`
    display: flex;
    margin-bottom: 30px;
`;
const Span = styled.section`
    margin-left: 15px;
    font-weight: bold;
`;
const DetailItem = styled.section`
    display: flex;
    justify-content: space-between;
`;
const Imagebox = styled.div`
    width: 35%;
    margin-bottom: 30px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
`;
const Description = styled.div`
    width: 55%;
`;
const Cover = styled.div`
   margin-bottom: 20px;
`;
const Titlemain = styled.h2`
   font-size: 35px;
   margin-bottom: 50px;
   font-weight: bold;
`;
const Title = styled.span`
  font-size: 22px;
  line-height: 1.5em;
`;
const Titlelite = styled.span`
   font-size: 22px;
   font-weight: bold;
`;