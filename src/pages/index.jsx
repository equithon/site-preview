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
  grid-template-rows: 20vh 50vh 10vh;
  grid-template-areas: "title pic"
                       "actions pic"
                       "social copyright";
  height: 80vh;
  width: 80vw;
  padding: 10vh 10vw;
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
  font-size: 4vmin;

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
    height: 10vw;
    border-radius: 10px;
    line-height: 10vw;
    font-size: 4vw;
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
  height: 2.5em;
  position: absolute;
  top: 0;
  left: 5%;
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(-2.5em)`}
`;

const ClickButton = styled.button`
  display: inline-block;
  background: transparent;
  float: right;
  height: 2.5em;
  width: 2.5em;
  border: none;
  cursor: pointer;
  position: relative;
  right: 1em;
  top: 0.7em;

  &:focus {
    outline: none;
  }

  transition: transform 500ms;
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(-2.5em)`};

  ${mediaSize.phone`
    height: auto;
    top: 1.1em;
  `};
`;

const ClickButtonImg = styled.img`
  max-width: 1em;
  max-height: 1em;
  float: right;
  opacity: 0.4;
`;

const ActionInputBox = styled.input`
  width: 70%;
  height: 2.5em;
  background: transparent;
  border: none;
  position: absolute;
  left: 7%;
  top: -5%;
  font-size: 1em;

`;

const ToastBox = styled.div`
  font-size: 1rem;
  margin-top: 10px;
  color: ${props => props.fontColor || 'white'};
  transition: all 500ms;
  opacity: ${props => props.show ? '1': 0 };
  transform: ${props => props.show ? css`translateY(0)` : css`translateY(1rem)`};

  ${mediaSize.phone`
    font-size: 2em;
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

  componentDidMount() {
    let animCanvas = document.getElementById('lamp-anim');

    if (animCanvas) {
      window.addEventListener('resize', this.resizeCanvas(animCanvas), false);
      this.resizeCanvas(animCanvas);
      let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      let height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

      // Lava lamp effect courtesy of https://codepen.io/happycrappie/pen/JJdNZq
      window.lavaAnimation = function() {
          "use strict";
          var t, i = {
                  screen: {
                      elem: null,
                      callback: null,
                      ctx: null,
                      width: 0,
                      height: 0,
                      left: 0,
                      top: 0,
                      init: function(t, i, s) {
                          return this.elem = document.getElementById(t), this.callback = i || null, "CANVAS" == this.elem.tagName && (this.ctx = this.elem.getContext("2d")), window.addEventListener("resize", function() {
                              this.resize()
                          }.bind(this), !1), this.elem.onselectstart = function() {
                              return !1
                          }, this.elem.ondrag = function() {
                              return !1
                          }, s && this.resize(), this
                      },
                      resize: function() {
                          var t = this.elem;
                          for (this.width = t.offsetWidth, this.height = t.offsetHeight, this.left = 0, this.top = 0; null != t; t = t.offsetParent) this.left += t.offsetLeft, this.top += t.offsetTop;
                          this.ctx && (this.elem.width = this.width, this.elem.height = this.height), this.callback && this.callback()
                      }
                  }
              },
              s = function(t, i) {
                  this.x = t, this.y = i, this.magnitude = t * t + i * i, this.computed = 0, this.force = 0
              };

          s.prototype.add = function(t) {
              return new s(this.x + t.x, this.y + t.y)
          };
          var h = function(t) {
              var i = .1,
                  h = 1.5;
                  console.log(t.height);
              this.vel = new s((Math.random() > .5 ? 1 : -1) * (.2 + .25 * Math.random()), (Math.random() > .5 ? 1 : -1) * (.2 + Math.random())), this.pos = new s(.2 * t.width + Math.random() * t.width * .6, .2 * t.height + Math.random() * t.height * .6), this.size = t.wh / 15 + (Math.random() * (h - i) + i) * (t.wh / 15), this.width = t.width, this.height = t.height
          };
          h.prototype.move = function() {
              this.pos.x >= this.width - this.size ? (this.vel.x > 0 && (this.vel.x = -this.vel.x), this.pos.x = this.width - this.size) : this.pos.x <= this.size && (this.vel.x < 0 && (this.vel.x = -this.vel.x), this.pos.x = this.size), this.pos.y >= this.height - this.size ? (this.vel.y > 0 && (this.vel.y = -this.vel.y), this.pos.y = this.height - this.size) : this.pos.y <= this.size && (this.vel.y < 0 && (this.vel.y = -this.vel.y), this.pos.y = this.size), this.pos = this.pos.add(this.vel)
          };
          var e = function(t, i, e, n, a) {
              this.step = 5, this.width = t, this.height = i, this.wh = Math.min(t, i), this.sx = Math.floor(this.width / this.step), this.sy = Math.floor(this.height / this.step), this.paint = !1, this.metaFill = r(t, i, t, n, a), this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0], this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1], this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0], this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1], this.grid = [], this.balls = [], this.iter = 0, this.sign = 1;
              for (var o = 0; o < (this.sx + 2) * (this.sy + 2); o++) this.grid[o] = new s(o % (this.sx + 2) * this.step, Math.floor(o / (this.sx + 2)) * this.step);
              for (var l = 0; e > l; l++) this.balls[l] = new h(this)
          };
          e.prototype.computeForce = function(t, i, s) {
              var h, e = s || t + i * (this.sx + 2);
              if (0 === t || 0 === i || t === this.sx || i === this.sy) h = .6 * this.sign;
              else {
                  h = 0;
                  for (var r, n = this.grid[e], a = 0; r = this.balls[a++];) h += r.size * r.size / (-2 * n.x * r.pos.x - 2 * n.y * r.pos.y + r.pos.magnitude + n.magnitude);
                  h *= this.sign
              }
              return this.grid[e].force = h, h
          }, e.prototype.marchingSquares = function(t) {
              var i = t[0],
                  s = t[1],
                  h = t[2],
                  e = i + s * (this.sx + 2);
              if (this.grid[e].computed === this.iter) return !1;
              for (var r, n = 0, a = 0; 4 > a; a++) {
                  var l = i + this.ix[a + 12] + (s + this.ix[a + 16]) * (this.sx + 2),
                      d = this.grid[l].force;
                  (d > 0 && this.sign < 0 || 0 > d && this.sign > 0 || !d) && (d = this.computeForce(i + this.ix[a + 12], s + this.ix[a + 16], l)), Math.abs(d) > 1 && (n += Math.pow(2, a))
              }
              if (15 === n) return [i, s - 1, !1];
              5 === n ? r = 2 === h ? 3 : 1 : 10 === n ? r = 3 === h ? 0 : 2 : (r = this.mscases[n], this.grid[e].computed = this.iter);
              var p = this.step / (Math.abs(Math.abs(this.grid[i + this.plx[4 * r + 2] + (s + this.ply[4 * r + 2]) * (this.sx + 2)].force) - 1) / Math.abs(Math.abs(this.grid[i + this.plx[4 * r + 3] + (s + this.ply[4 * r + 3]) * (this.sx + 2)].force) - 1) + 1);
              return o.lineTo(this.grid[i + this.plx[4 * r] + (s + this.ply[4 * r]) * (this.sx + 2)].x + this.ix[r] * p, this.grid[i + this.plx[4 * r + 1] + (s + this.ply[4 * r + 1]) * (this.sx + 2)].y + this.ix[r + 4] * p), this.paint = !0, [i + this.ix[r + 4], s + this.ix[r + 8], r]
          }, e.prototype.renderMetaballs = function() {
              for (var t, i = 0; t = this.balls[i++];) t.move();
              for (this.iter++, this.sign = -this.sign, this.paint = !1, o.fillStyle = this.metaFill, o.beginPath(), i = 0; t = this.balls[i++];) {
                  var s = [Math.round(t.pos.x / this.step), Math.round(t.pos.y / this.step), !1];
                  do s = this.marchingSquares(s); while (s);
                  this.paint && (o.fill(), o.closePath(), o.beginPath(), this.paint = !1)
              }
          };
          var r = function(t, i, s, h, e) {
              var r = o.createRadialGradient(t / 1, i / 1, 0, t / 1, i / 1, s);
              return r.addColorStop(0, h), r.addColorStop(1, e), r
          };
          if (document.getElementById("lamp-anim")) {
              var n = function() {
                      requestAnimationFrame(n), o.clearRect(0, 0, a.width, a.height), t.renderMetaballs()
                  },
                  a = i.screen.init("lamp-anim", null, !0),
                  o = a.ctx;
              a.resize(), t = new e(a.width, a.height, Math.floor(Math.max(width, height) / 130), "#895fd2", "#7462e3")
          }
          return {
              run: n
          }
      }();

      lavaAnimation.run();

    }
  }

  resizeCanvas(canvas) {
    let width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    let height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    canvas.width = width;
    canvas.height = height;
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
    console.log(this.state.curInput)
    console.log(this.state.lastInputValid)
    let imgSrc = '/submit.svg';
    let toastMsg = null;
    let toastColor = null;
    if(this.state.lastInputValid === false) {
      imgSrc = '/fail.svg';
      toastMsg = 'Your email address seems funky. Try again?';
      toastColor = '#fa5050';
    }
    if(this.state.lastInputValid === true){
      imgSrc = '/success.svg';
      toastMsg = 'You\'re all set! Keep an eye on your inbox.';
      toastColor = '#37d634';
    }
    return (
      <div>
        {/*}<Particles params={particleConfig} style={ParticlesStyle} />*/}
        <canvas id="lamp-anim" className="lamp-anim" width="1024" height="613" style={{position: "absolute", left: 0, top: 0}}></canvas>
        <Container>
          <Title>
            Equithon
          </Title>
          <Logo src='/Logo-RBG_white.png' />
          <ActionContainer>
            <ActionHeader>Be a part of the <WordShadow>change</WordShadow>.</ActionHeader>
            <div style={{gridArea: 'exec-team', fontSize: '2vmin'}}>
              { isMobile ? null : <span>You. Yes, you! We want you to help us make Equithon 2019 the best one yet.<br/></span> }
              <ActionButton onClick={() => window.open('https://www.google.ca/search?q=this+should+link+to+the+exec+application+typeform%2Fgoogle+form&oq=this+should+link+to+the+exec+application+typeform')}>
                { isMobile ? "Join The Exec Team" : "Join The Team" }
              </ActionButton>
            </div>
            <div style={{gridArea: 'mailing-list', fontSize: '2vmin'}}>
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
