import React from 'react';
import styled from "styled-components"

const StyeldDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  width: 25%;
  color: #000;
  h4 {
    font-family: HelveticaNeueCyr;
    line-height: 19px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 3vh;
  }
  p {
    font-family: HelveticaNeueCyr;
    line-height: 22px;
    font-size: 16px;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Skills = ({ data }) => (
  <StyledSection>
    {data.map(item => (
      <StyeldDiv key={item.id}>
        <h4>{item.title}</h4>
        {item.body.map(item => (
          <p>{item}</p>
        ))}
      </StyeldDiv>
    ))}
  </StyledSection>
)

export default Skills