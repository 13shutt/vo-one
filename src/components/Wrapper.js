import styled, { css } from 'styled-components'

const Wrapper = styled.div`

  ${({ body }) => 
    body && css`
      width: 65vw;
      margin-top: 10vh;
    `
  }

  ${({ intro }) => 
    intro && css`
      width: 65vw;
      margin-top: 7vh;
    `
  }

  ${({ main }) => 
    main && css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `
  }

  ${({ experience }) => 
    experience && css`
      margin-top: 12vh;
      margin-bottom: 8vh; 
    `
  }

  ${({ testimonials }) => 
    testimonials && css`
      margin-top: 12vh;
      margin-bottom: 8vh; 
    `
  }

  ${({ skills }) => 
    skills && css`
      margin-top: 12vh;
      margin-bottom: 8vh; 
    `
  }

  ${({ goal }) => 
    goal && css`
      margin-top: 12vh;
      margin-bottom: 35vh;
    `
  }

  ${({ aligned }) => 
    aligned && css`
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin-top: 10vh;
      } 
      button {
        margin-top: 20vh;
      }
    `
  }
`

export default Wrapper;