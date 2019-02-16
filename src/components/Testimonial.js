import React from 'react';
import styled from "styled-components"

const StyeldDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6vh 0;
  color: #000;
  h4 {
    font-family: HelveticaNeueCyrMedium;
    line-height: 19px;
    font-size: 24px;
    font-weight: bold;
  }
  p {
    font-family: "HelveticaNeueCyrLight";
    line-height: normal;
    font-size: 18px;
    margin-top: 2vh;
  }
`

const StyledSection = styled.section`
  margin-top: 8vh;
`

const Testimonial = ({ data }) => (
  <StyledSection>
    {data.map(item => (
      <StyeldDiv key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </StyeldDiv>
    ))}
  </StyledSection>
)

export default Testimonial