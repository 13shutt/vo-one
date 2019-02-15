import React, { Component } from 'react'
import { Title, TitleText, Paragraph, Wrapper, Jobs, Testimonial, Skills, Button } from 'components'

import exp from 'assets/data/exp.js'
import testimonials from 'assets/data/testimonials.js'
import skills from 'assets/data/skills.js'

class Home extends Component {

  render() { 
    return (
      <section>
        <Title>
          <div>
            <h3>
              hello, my name is <span>Vladimir Vuchkan,</span> and i am
            </h3>
            <TitleText header>Software</TitleText>
            <TitleText black>engineer.</TitleText>
          </div>
        </Title>
        
        <Wrapper intro>
          <TitleText label>INTRO</TitleText>
          <Paragraph text>
            <span>This online version of my</span> resume was created as an experiment to learning Vue.js from scratch. For development, I've used manually configured vue-cli with the following features: Router, SCSS/SASS Pre-processors, ESLint + Airbnb config, Unit Testing on Jest and E2E Testing on Cypress.
          </Paragraph>
        </Wrapper>
        
        <hr/>

        <Wrapper experience>
          <TitleText label>EXPERIENCE</TitleText>
          <Jobs data={exp} />
        </Wrapper>

        <hr/>

        <Wrapper testimonials>
          <TitleText label>TESTIMONIALS</TitleText>
          <Testimonial data={testimonials}/>
        </Wrapper>

        <hr/>

        <Wrapper skills>
          <TitleText label>SKILLS</TitleText>
          <Skills data={skills} />
        </Wrapper>

        <hr/>

        <Wrapper goal>
          <TitleText label>PERSONAL GOAL</TitleText>
          <Wrapper aligned>
            <Paragraph>As a Developer, I want to make all users happy with the service providing the solution to their issues, thus, helping the business grow and make more profit.</Paragraph>
            <Button>Contact me</Button>
          </Wrapper>
        </Wrapper>
      </section>
    );
  }
}
 
export default Home;