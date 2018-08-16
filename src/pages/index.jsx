import React from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';
import { isMobile } from 'react-device-detect';
import MtSvgLines from 'react-mt-svg-lines';
import {
  mediaSize,
  particleConfig
} from '../configOptions.js';


const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: 2fr 2fr 1fr;
  grid-template-areas: "title pic"
                       "actions pic"
                       "social copyright";
  height: 80vh;
  width: 80vw;
  padding: 10vh 10vw;
  background: linear-gradient(to bottom right, #a934f7 0%, #ad51e8 48%, #b26fd9 99%);

  color: white;
  font-family: "SF Pro Text", sans-serif;

  & > * {
    z-index: 2;
  }

  ${mediaSize.phone`
    grid-template-columns: auto 40vw;
    grid-template-rows: 60vw 1fr 1fr;
    grid-template-areas: "pic title"
                         "actions actions"
                         "social copyright";
  `};
`;

// Style of the particles.js background container
const ParticlesStyle = {
  position: 'fixed',
  minWidth: '100vw',
  minHeight: '100vh',
  zIndex: '1'
};

const Title = styled.div`
  grid-area: title;
  font-size: 15vmin;
  align-self: center;
  font-weight: bold;

  &:after {
    content: 'is back.';
    font-size: 6vmin;
    position: relative;
    top: 1em;
    right: 3em;
    white-space:nowrap;
  }

  ${mediaSize.phone`
    position: relative;
    right: 35vw;
  `};
`;

const Logo = styled.img`
  grid-area: pic;
  margin-top: 3em;
  max-width: 35vw;
  max-height: 55vh;
  justify-self: end;
  align-self: end;

  ${mediaSize.phone`
    max-width: 35vw;
    max-height: 70vw;
    justify-self: start;
    opacity: 0.4;
  `};
`;

const ActionContainer = styled.div`
  grid-area: actions;
  display: grid;
  align-self: center;
  grid-template-columns: 15vw 15vw;
  grid-template-rows: 2fr 8fr;
  grid-column-gap: 20%;
  grid-row-gap: 2em;
  grid-template-areas: "action action"
                       "exec-team mailing-list";

  ${mediaSize.phone`
    width: 95%;
    justify-self: center;
    grid-template-columns: auto;
    grid-template-rows: 2em 2em 2em;
    grid-column-gap: 0;
    margin-top: 4em;
    grid-row-gap: 5px;
    grid-template-areas: "action"
                         "exec-team"
                         "mailing-list";
  `};
`;

const ActionHeader = styled.div`
  grid-area: action;
  font-size: 4vmin;

  ${mediaSize.phone`
    font-size: 5vmin;
  `};
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
  margin-top: 1.5em;
  background-color: white;
  color: #a934f7;
  height: 2.5em;
  border-radius: 20px;
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

  ${mediaSize.phone`
    height: 8vw;
    border-radius: 10px;
    line-height: 8vw;
    font-size: 3vw;
  `};
`;

const ActionInput = styled.div`
  margin-top: 1.5em;
  height: 2.5em;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fff;
	border-bottom: 2px solid #909090;
	text-shadow: 0px -2px #fff;
  text-align: center;
  line-height: 2.5em;
  position: relative;
  overflow-y: hidden;

  & textarea:focus, input:focus{
    outline: none;
  }

  ${mediaSize.phone`
    height: 8vw;
    border-radius: 10px;
    line-height: 8vw;
    font-size: 3vw;
  `};
`;

const ActionInputOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0);
  color: ${props => props.color};
  white-space: nowrap;
  transition: transform 500ms;
  width: ${props => props.width};
  height: 2.5em;
  position: absolute;
  top: 0;
  left: 5%;
  transform: ${props => props.focused ? css`translateY(-2.5em)` : css`translateY(0)`}
`;

const ClickButton = styled.img`
  max-width: 1em;
  max-height: 1em;
  float: right;
  position: relative;
  right: 0.5em;
  top: 0.75em;
  opacity: 0.4;
`;

const ActionInputBox = styled.input`
  width: 70%;
  height: 2.5em;
  background: transparent;
  border: none;
  position: absolute;
  left: 7%;
  font-size: 1em;
`;

const ToastBox = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  color: ${props => props.fontColor || 'white'};
  transition: all 500ms;
  opacity: ${props => props.show ? '1': 0 };
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(1rem)`}
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
    this.state = {
      inputFocused: false,
      curInput: '',
      lastInputValid: null,
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const userEmail = e.target.children && e.target.children[0].value;
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(userEmail) ){ // valid email
      console.log(userEmail + " is valid");
      this.setState({lastInputValid: true})
    } else { // invalid email
      console.log(userEmail + " is invalid");
      this.setState({lastInputValid: false})
    }

  }

  render() {
    let imgSrc = '/submit.svg';
    let toastMsg = null;
    let toastColor = null;
    if(this.state.lastInputValid === false) {
      imgSrc = '/fail.svg';
      toastMsg = 'Your email address seems funky. Try again.';
      toastColor = '#fa5050';
    }
    if(this.state.lastInputValid === true){
      imgSrc = '/success.svg';
      toastMsg = 'You\'re set! Keep an eye on your inbox.';
      toastColor = '#37d634';
    }
    return (
      <div>
        {/*}<Particles params={particleConfig} style={ParticlesStyle} />*/}
        <Container>
          <Title>
            Equithon
          </Title>
          <Logo src='/Logo-RBG_white.png' />
          <ActionContainer>
            <ActionHeader>Be a part of the <WordShadow>change</WordShadow>.</ActionHeader>
            <div style={{gridArea: 'exec-team', fontSize: '2vmin'}}>
              { isMobile ? null : <span>We want you to help us make Equithon 2019 the best one yet.<br/></span> }
              <ActionButton onClick={() => window.open('https://www.google.ca/search?q=this+should+link+to+the+exec+application+typeform%2Fgoogle+form&oq=this+should+link+to+the+exec+application+typeform')}>
                { isMobile ? "Join The Exec Team" : "Join The Team" }
              </ActionButton>
            </div>
            <div style={{gridArea: 'mailing-list', fontSize: '2vmin'}}>
              { isMobile ? null : <span>Interested in participating? Be the first to receive updates by signing up. <br/></span> }
              <ActionInput onClick={() => this.setState({ inputFocused: true })} tabIndex="0" onBlur={() => this.setState({ inputFocused: false })} lastSubmitted={this.state.lastInputValid}>
                <ActionInputOverlay focused={this.state.inputFocused} color="#a934f7" width="90%">
                  { !this.state.curInput ? (isMobile ? "Sign Up For Updates" : "Keep Me Posted") : null }
                </ActionInputOverlay>
                <ActionInputOverlay focused={!this.state.inputFocused} color="rgba(142, 142, 142, 0.3)" width="90%">
                  { !this.state.curInput ? (isMobile ? "Email" : "Your Email") : null }
                  <ClickButton src={imgSrc} />
                </ActionInputOverlay>
                <form name="contact" method="POST" onSubmit={(e) => this.handleSubmit(e)} netlify>
                  <ActionInputBox type="email" name="userEmail" onChange={(evt) => { this.setState({curInput: evt.target.value, lastInputValid: null}) }} />
                </form>
              </ActionInput>
              <ToastBox fontColor={toastColor} show={toastMsg !== null}>
                {toastMsg}
              </ToastBox>
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
