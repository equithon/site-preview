import React from 'react';
import styled, { css } from 'styled-components';
import Particles from 'react-particles-js';
import { isMobile } from 'react-device-detect';
import MtSvgLines from 'react-mt-svg-lines';
import {
  mediaSize,
  particleConfig
} from '../configOptions.js';
import LavaLampBg from '../components/LavaLampBg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: 20vh 50vh 10vh;
  grid-template-areas: "title pic"
                       "actions pic"
                       "social copyright";
  height: 83vh;
  width: 80vw;
  padding: 10vh 10vw 7vh 10vw;
  background: linear-gradient(to bottom right, #895fd2 10%, #8f6bcd 48%, #b797ee 99%);

  color: white;
  font-family: "SF Pro Text", sans-serif;

  & > * {
    z-index: 2;
  }

  ${mediaSize.phone`
    grid-template-columns: 30vw 45vw;
    grid-template-rows: 50vw auto 2em;
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
    right: 28vw;
  `};
`;

const Logo = styled.img`
  grid-area: pic;
  margin-top: 3em;
  max-width: 35vw;
  max-height: 55vh;
  justify-self: end;
  align-self: start;

  ${mediaSize.phone`
    max-width: 35vw;
    max-height: 70vw;
    align-self: end;
    justify-self: start;
    opacity: 0.4;
  `};
`;

const ActionContainer = styled.div`
  margin-top: 4em;
  grid-area: actions;
  display: grid;
  align-self: center;
  grid-template-columns: 17vw 17vw;
  grid-template-rows: 2fr 12em;
  grid-column-gap: 20%;
  grid-row-gap: 2em;
  grid-template-areas: "action action"
                       "exec-team mailing-list";


  ${mediaSize.phone`
    width: 95%;
    margin-top: 0;
    justify-self: center;
    align-self: end;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-template-areas: "action"
                         "exec-team"
                         "mailing-list";
  `};
`;

const ActionHeader = styled.div`
  grid-area: action;
  font-size: 4.5vmin;

  ${mediaSize.phone`
    font-size: 6vmin;
    margin-bottom: 0.5em;
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
  color: #895fd2;
  height: 2em;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fff;
	border-bottom: 2px solid #909090;
	text-shadow: 0px -2px #fff;
  text-align: center;
  line-height: 2em;

  &:hover {
    transform: translate(0px,2px);
	  border-bottom: 1px solid;
  }

  ${mediaSize.phone`
    height: 10vw;
    border-radius: 10px;
    line-height: 10vw;
    font-size: 4vw;
  `};
`;

const ActionInput = styled.div`
  margin-top: 1.5em;
  height: 2.5rem;
  border-radius: 20px;
  cursor: pointer;
  background-color: #fff;
	border-bottom: 2px solid #909090;
	text-shadow: 0px -2px #fff;
  text-align: center;
  line-height: 2.5rem;
  position: relative;
  overflow-y: hidden;

  & input:focus{
    outline: none;
  }

  & input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }

  ${mediaSize.phone`
    margin-top: 1.5em;
    height: 10vw;
    border-radius: 10px;
    line-height: 10vw;
    font-size: 4vw;
  `};
`;

const ActionInputOverlay = styled.div`
  background-color: rgba(255, 255, 255, 0);
  color: ${props => props.color};
  white-space: nowrap;
  transition: transform 500ms;
  width: ${props => props.width};
  height: 2.5rem;
  position: absolute;
  top: 0;
  left: 5%;
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(-2.5em)`}
`;

const ClickButton = styled.button`
  display: inline-block;
  background: transparent;
  float: right;
  height: 2.5rem;
  width: 2.5em;
  border: none;
  cursor: pointer;
  position: relative;
  right: 1em;
  display: table;
  &:focus {
    outline: none;
  }

  transition: transform 500ms;
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(-2.5em)`};

  ${mediaSize.phone`
    height: 10vw;
  `};
`;

const ClickButtonImg = styled.img`
  max-width: 1.3em;
  max-height: 1.3em;
  float: right;
  opacity: 0.4;
  display: table-cell;
  vertical-align: middle;
`;

const ActionInputBox = styled.input`
  width: 70%;
  height: 2.5rem;
  background: transparent;
  border: none;
  position: absolute;
  left: 10%;
  top: -5%;
  font-size: 1em;
  ${mediaSize.phone`
    height: 10vw;
  `};
`;

const ToastBox = styled.div`
  font-size: 1rem;
  margin: 10px 0 5px 0;
  color: ${props => props.fontColor || 'white'};
  transition: all 500ms;
  opacity: ${props => props.show ? '1': 0 };
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(1rem)`};

  ${mediaSize.phone`
    font-size: 1.5em;
    height: 3em;
  `};
`;

const SocialContainer = styled.div`
  grid-area: social;
  align-self: end;

  & img {
    width: 3em;
    height: 3em;
    margin-right: 10px;
    opacity: 0.75;
    transition: opacity 300ms ease-in-out;

    ${mediaSize.phone`
      opacity: 1;
      width: 1.5em;
      height: 1.5em;
      margin-right: 5px;
    `};

    &:hover {
      opacity: 1;
    }
  }

`;

const Copyright = styled.div`
  grid-area: copyright;
  font-size: 2.5vmin;
  align-self: end;
  justify-self: end;
  margin-right: 3vw;

  ${mediaSize.phone`
    width: 80%;
    text-align: right;
    align-self: center;
    font-size: 3.25vmin;
    margin-right: 2vmin;
  `};
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
    const userEmail = e.target.children && e.target.children[1].value;
    if( /(.+)@(.+){2,}\.(.+){2,}/.test(userEmail)){ // valid email
      console.log(userEmail + " is valid");
      this.setState({lastInputValid: true})
    } else { // invalid email
      console.log(userEmail + " is invalid");
      this.setState({lastInputValid: false})
    }

  }

  render() {
    let imgSrc = '/button_submit.svg';
    let toastMsg = null;
    let toastColor = null;
    if(this.state.lastInputValid === false) {
      imgSrc = '/button_fail.svg';
      toastMsg = 'Your email address seems funky. Try again?';
      toastColor = '#fa5050';
    }
    if(this.state.lastInputValid === true){
      imgSrc = '/button_success.svg';
      toastMsg = 'You\'re all set! Keep an eye on your inbox.';
      toastColor = '#37d634';
    }

    return (
      <div>
        {/*}<Particles params={particleConfig} style={ParticlesStyle} />*/}
        <LavaLampBg />
        <Container>
          <Title>
            Equithon
          </Title>
          <Logo src='/logo.png' />
          <ActionContainer>
            <ActionHeader>Be a part of the <WordShadow>change</WordShadow>.</ActionHeader>
            <div style={{gridArea: 'exec-team', fontSize: '2.5vmin'}}>
              { isMobile ? null : <span>You. Yes, you! We want you to help us make Equithon 2019 the best one yet.<br/></span> }
              <ActionButton onClick={() => window.open('https://www.google.ca/search?q=this+should+link+to+the+exec+application+typeform%2Fgoogle+form&oq=this+should+link+to+the+exec+application+typeform')}>
                { isMobile ? "Join The Exec Team" : "Join The Team" }
              </ActionButton>
            </div>
            <div style={{gridArea: 'mailing-list', fontSize: '2.5vmin'}}>
              { isMobile ? null : <span>Interested in participating? Be the first to receive updates by signing up. <br/></span> }
              <ActionInput onClick={() => this.setState({ inputFocused: true })} tabIndex="0" onBlur={() => this.setState({ inputFocused: false })} lastSubmitted={this.state.lastInputValid}>
                <ActionInputOverlay show={!this.state.inputFocused} color="#895fd2" width="90%">
                  { !this.state.curInput ? (isMobile ? "Sign Up For Updates" : "Keep Me Posted") : null }
                </ActionInputOverlay>
                <ActionInputOverlay show={this.state.inputFocused} color="rgba(142, 142, 142, 0.3)" width="90%">
                  { !this.state.curInput ? "Your Email" : null }
                </ActionInputOverlay>
                <form name="contact" id="mailingListForm" onSubmit={(e) => this.handleSubmit(e)}>
                  <ClickButton type="submit" show={this.state.inputFocused || this.state.curInput !== ''}>
                    <ClickButtonImg src={imgSrc} />
                  </ClickButton>
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
              <img src='/social_fb.png' />
            </a>
            <a href='https://www.instagram.com/equithon' target='_blank'>
              <img src='/social_insta.png' />
            </a>
            <a href='mailto:hello@equithon.org'>
              <img src='/social_email.png' />
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
