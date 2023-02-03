import React from 'react';

// packages
import styled from 'styled-components';

// images
import aboutImg from "../../assets/images/about-img.jpg";

const About = () => {
  return (
    <Container id="about">
      <Div>
        <Title>
          <Head>About</Head>
          <Imagecontent>
            <Image src = {aboutImg} alt = "aboutImg" />
          </Imagecontent>
        </Title>
        <Content>
          <Text>
            <Subhead>About Book World</Subhead>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</Description>
            <Explanation>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam quae aut reiciendis itaque provident placeat iste non aperiam eius voluptate sequi, soluta facere tenetur natus minima, distinctio fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere aperiam neque impedit animi natus, deleniti doloremque harum dolore tempora nesciunt, possimus pariatur odio corrupti consectetur. Provident eaque nam deserunt.</Explanation>
          </Text>
        </Content>
      </Div>
    </Container>
  )
}

export default About

const Container = styled.section`
  padding: 120px 150px 50px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
 
`;
const Title = styled.div`
  width: 50%;
`;
const Head = styled.h2`
  margin-bottom: 20px;
  color: #000;
  font-size: 25px;
  font-weight: bold;
`;
const Content = styled.div`
  width: 50%;
`;
const Imagecontent = styled.div`
  width: 85%;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const Text = styled.div`

`;
const Subhead = styled.h3`
  margin-bottom: 50px;
  color: #000;
  font-size: 45px;
  font-weight: bold;
`;
const Description = styled.p`
  margin-bottom: 20px;
  color: #000;
  font-size: 24px;
`;
const Explanation = styled.p`
  margin-bottom: 20px;
  color: #000;
  font-size: 24px;
`;
