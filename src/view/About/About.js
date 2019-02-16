import React, { Component } from 'react'
import { TitleText, Paragraph, Wrapper } from 'components'


class About extends Component {
  render() { 
    return (
      <section>
        <Wrapper title>
          <TitleText medium>About me</TitleText>
        </Wrapper>

        <Wrapper about>
          <Paragraph about>
            Hey, my name is Cole Townsend. I'm a product designer in Boston, creating thoughtful solutions for office workflow at Robin.
          </Paragraph>
        </Wrapper>

        <Wrapper text>
          <Paragraph high>
            For more than 8 years I have been working in the international companies that develop products and business solutions for the markets of the USA, Europe, and Scandinavia. My major responsibilities were the development and support of big high-load projects using the most innovative technologies available. I like to challenge myself and always seek for new ways of improvement and find the most appropriate solutions to difficult tasks. My life is experienced only in moving forward.
          </Paragraph>
        </Wrapper>

        <Wrapper text>
          <Paragraph high>
            I am a team player appreciating an opportunity to work with other professionals and create responsive and beautifully designed websites and apps. I always dedicate a lot of time and attention to training and motivation of each member of my team – that is how I ensure my mates are goal-driven and feel supported.
          </Paragraph>
        </Wrapper>

        <Wrapper text>
          <Paragraph high>
            They say, the devil is in the detail, so I take it as a personal challenge to balance creativity and close attention to the details. I aim my clients receive a high-quality product based on their needs and requirements. I like working with brands and product companies helping reach their business goals and leave their customers happy with the experience.
          </Paragraph>
        </Wrapper>

        <Wrapper text>
          <Paragraph high>
            I attend profile conferences and training on regular basis. A while ago I started teaching my own course in one of the most popular projects in Ukraine dedicated to creative education and training. My interests are vast: from cooking to traveling. I get my inspiration from new experience and emotions.
          </Paragraph>
        </Wrapper>

        <Wrapper empty></Wrapper>
      </section>
    );
  }
}
 
export default About;