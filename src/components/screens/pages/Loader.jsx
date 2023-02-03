import React from 'react';

// package
import styled from 'styled-components';

// image
import LoaderImg from "../../assets/images/loader.svg";


const Loader = () => {
  return (
    <LoadImg>
      <Img src = {LoaderImg} alt = "Loader" />
    </LoadImg>
  )
}

export default Loader

const LoadImg = styled.div`
padding-top: 150px;
  width: 20%;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100%;
  display: block;
`;