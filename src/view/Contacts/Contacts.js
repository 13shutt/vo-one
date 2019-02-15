import React, { Component } from 'react'
import { TitleText, Paragraph, Wrapper, Contact } from 'components'

class Contacts extends Component {
  render() { 
    return (
      <section>
        <Wrapper title>
          <TitleText medium>Contacts</TitleText>
        </Wrapper>
        
        <Wrapper intro>
          <Paragraph>
            I am an open-minded positive individual who shapes new ideas with right values and bright vision. If you have any questions or interested in the partnership, I will be happy to talk:
          </Paragraph>
        </Wrapper>

        <Wrapper>
          <Contact>
            <div>my email:</div> 
            <span>leo@trytynichenko.com</span>
          </Contact>
          <Contact>
            <div>social websites:</div> 
            <span>LinkedIn,</span> 
            <span>facebook,</span> 
            <span>twitter</span>
          </Contact>
          <Contact>
            <div>messengers:</div> 
            <span>telegram,</span> 
            <span>whatsApp</span>
          </Contact>
        </Wrapper>  
      </section>
    );
  }
}
 
export default Contacts;