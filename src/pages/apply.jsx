import React from 'react';
import styled from 'styled-components';
import LavaLampBg from '../components/LavaLampBg';


const Container = styled.div`
  height: 80vh;
  width: 80vw;
  padding: 10vh 10vw;
  background: linear-gradient(to bottom right, #895fd2 10%, #8f6bcd 48%, #b797ee 99%);

  color: white;
  font-family: "SF Pro Text", sans-serif;
`;

const Text = styled.div`
  width: 70%;
  height: 90%;
  padding-top: 10%;
  justify-text: center;
  margin-left: auto;
  margin-right: auto;

  font-size: 5vmin;
  font-weight: bold;
  position: relative;
  z-index: 3;
  opacity: 0.8;

  & a {
    color: white;
    opacity: 0.8;
    font-size: 2rem;

    &:hover {
      opacity: 1;
      transition: opacity 500ms;
    }
  }
`;

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <LavaLampBg />
        <Text>Applications will be opening Sept 9, so mark your calendars! <br/><br/> We love your enthusiasm and are looking forward to possibly having you on the team 😄 <br/><br/> <a href="/">Meanwhile, why not sign up for updates?</a></Text>
      </Container>
    )
  }
}

export default NotFoundPage;
