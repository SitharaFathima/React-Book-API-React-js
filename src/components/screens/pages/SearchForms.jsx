import React, {useRef, useEffect} from 'react';

// packagde
import styled from 'styled-components';

// icons and images
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../context.';

function SearchForms() {
    const {setSearchTerm, setResultTitle} = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();
  
    useEffect(() => searchText.current.focus(), []);
    const handleSubmit = (e) => {
      e.preventDefault();
      let tempSearchTerm = searchText.current.value.trim();
      if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
        setSearchTerm("the lost world");
        setResultTitle("Please Enter Something ...");
      } else {
        setSearchTerm(searchText.current.value);
      }
    navigate("/book");  
} 
  return (
    <>
      <FormContainer>
        <Form action='#' method="post" onSubmit={handleSubmit}>
          <Input type="text"placeholder="The Lost World" ref = {searchText} />
          <FaSearch style={{color:"blueviolet", fontSize:"30px"}} onClick={handleSubmit} />
        </Form>
      </FormContainer>
    </>
  )
}

export default SearchForms

const FormContainer = styled.div`
    
`;
const Form = styled.form`
    padding: 15px 25px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 35%;
    background: #fff;
    height: 60px;
    border-radius: 50px;
`;
const Input = styled.input`
    font-size: 18px;
    width: 90%;
    border: none;
    outline: none;
`;