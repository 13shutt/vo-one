import React from 'react';
import styled from "styled-components"

const StyeldDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  width: 19%;
  color: #000;

  &:nth-child(2), &:nth-child(3), &:nth-child(4),
  &:nth-child(6), &:nth-child(7), &:nth-child(8) {
    margin-left: 6%
  }

  h4 {
    font-family: "HelveticaNeueCyrMedium";
    line-height: normal;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 3vh;
  }
  p {
    font-family: "HelveticaNeueCyrLight";
    line-height: 25px;
    font-size: 18px;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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