import React from 'react';
import styled from "styled-components"

const StyeldDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 0;
  color: #000;
  h4 {
    font-family: HelveticaNeueCyrMedium;
    line-height: normal;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h5 {
      font-family: HelveticaNeueCyr;
      line-height: normal;
      font-size: 16px;
    }
    span {
      width: 36vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      p {
        width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        font-family: HelveticaNeueCyr;
        line-height: normal;
        font-size: 16px;
      }
    }
  }
`

const StyledSection = styled.section`
  margin-top: 8vh;
`

const Jobs = ({ data }) => (
  <StyledSection>
    {data.map(item => (
      <StyeldDiv key={item.id}>
        <h4>{item.company}</h4>
        <div>
          <h5>{item.rank}</h5>
          <span>
            <p>{item.from}</p>
            <p>{item.to}</p>
          </span>
        </div>
      </StyeldDiv>
    ))}
  </StyledSection>
)

export default Jobs