import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import {
  mediaSize,
  particleConfig
} from '../configOptions.js';


const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: 2.5fr 2fr 1fr;
  grid-template-areas: "title pic"
                       "actions pic"
                       "social copyright";
  min-height: 80vh;
  min-width: 80vw;
  padding: 10vh 10vw;
  background: linear-gradient(to bottom right, #a934f7 0%, #ad51e8 48%, #b26fd9 99%);

  color: white;
  font-family: "SF Pro Text", sans-serif;

  & > * {
    z-index: 2;
  }
`;

// Style of the particles.js background container
const ParticlesStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '1'
};

const Title = styled.div`
  grid-area: title;
  font-size: 15vmin;

  font-weight: bold;

  &:after {
    content: 'is back.';
    font-size: 3rem;
    position: relative;
    top: 1em;
    right: 3em;
    white-space:nowrap;
  }
`;

const Logo = styled.img`
  grid-area: pic;
  font-size: 5em;
  max-width: 30vw;
  max-height: 50vh;
  justify-self: end;
  align-self: center;
`;

const ActionContainer = styled.div`
  grid-area: actions;
  display: grid;
  grid-template-columns: 15vw 15vw;
  grid-template-rows: 2fr 8fr;
  grid-column-gap: 20%;
  grid-row-gap: 2em;
  grid-template-areas: "action action"
                       "exec-team mailing-list";

`;

const ActionHeader = styled.div`
  grid-area: action;
  font-size: 4vmin;

`;

const WordShadow = styled.span`
  position: relative;

  &:after {
    content: 'Change';
    font-size: 1.5em;
    color: rgba(249, 249, 249, 0.3);
    font-weight: bold;
    position: absolute;
    top: -0.4em;
    right: -1em;
    white-space:nowrap;
  }
`;

const ActionButton = styled.div`
  margin-top: 1em;
  background-color: white;
  color: #a934f7;
  height: 2.5em;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
	border-bottom: 2px solid #909090;
	text-shadow: 0px -2px #fff;
  text-align: center;
  line-height: 2.5em;
  &:hover {
    transform: translate(0px,2px);
	  border-bottom: 1px solid;
  }
`;

const SocialContainer = styled.div`
  grid-area: social;
  font-size: 3vmin;
  align-self: end;

  & img {
    max-width: 1.5em;
    max-height: 1.5em;
    margin-right: 10px;
    opacity: 0.75;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  grid-area: copyright;
  font-size: 2vmin;
  align-self: end;
  justify-self: end;
  margin-right: 3vw;
`;



class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Particles params={particleConfig} style={ParticlesStyle} />
        <Container>
          <Title>
            Equithon
          </Title>
          <Logo src='/Logo-RBG_white.png' />
          <ActionContainer>
            <ActionHeader>Be a part of the <WordShadow>change</WordShadow>.</ActionHeader>
            <div style={{gridArea: 'exec-team', fontSize: '2vmin'}}>
              We want you to help us make Equithon 2019 the best one yet. <br/>
              <ActionButton onClick={() => window.open('https://www.google.ca/search?q=this+should+link+to+the+exec+application+typeform%2Fgoogle+form&oq=this+should+link+to+the+exec+application+typeform')}>
                Join The Team
              </ActionButton>
            </div>
            <div style={{gridArea: 'mailing-list', fontSize: '2vmin'}}>
              Interested in participating? Be the first to receive updates by signing up. <br/>
              <ActionButton>
                Keep Me Posted
              </ActionButton>
            </div>
          </ActionContainer>
          <SocialContainer>
            <a href='https://www.facebook.com/UWEquithon/' target='_blank'>
              <img src='/facebook.png' />
            </a>
            <a href='https://www.instagram.com/equithon' target='_blank'>
              <img src='/instagram.png' />
            </a>
            <a href='mailto:hello@equithon.org'>
              <img src='/email.png' />
            </a>
          </SocialContainer>
          <Copyright>
            © Equithon Corp. 2018.
          </Copyright>
        </Container>
      </div>
    )
  }
}

export default IndexPage;
