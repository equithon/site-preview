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
  height: 100%;
  padding-top: 10%;
  justify-text: center;
  margin-left: auto;
  margin-right: auto;

  font-size: 7vmin;
  font-weight: bold;
  position: relative;
  z-index: 3;
  opacity: 0.8;

  & a {
    color: white;
    opacity: 0.8;

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
        <Text><div style={{fontSize: "1.5em", marginBottom: "10px"}}>Error 404:</div> There's nothing here, but we admire your curiosity. <br/><br/> <a href="/">Come help us make Equithon 2019 a reality!</a></Text>
      </Container>
    )
  }
}

export default NotFoundPage;
