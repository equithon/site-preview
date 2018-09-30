import React from 'react';
import styled from 'styled-components';
import LavaLampBg from '../components/LavaLampBg';
import Helmet from 'react-helmet';


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
        <Helmet>
          <title>Whoops!</title>
          <meta
            name="description"
            content="A social innovation hackathon like no other. Equithon is back for 2019."
          />
          <meta
            name="google-site-verification"
            content="HrZx9ln8WamacY3EvmuPaCpXqW0Ovw82ybThKXOEiQw"
          />
          <meta
            name="keywords"
            content="equithon, hackathon, event, social, innovation, equity, waterloo, university, 2019"
          />
          <link
            rel="icon"
            href="/logo_tiny.png"
            sizes={['16x16', '32x32', '64x64', '128x128']}
            type="image/png"
          />
        </Helmet>
        <LavaLampBg />
        <Text><div style={{fontSize: "1.5em", marginBottom: "10px"}}>Error 404:</div> There's nothing here, but we admire your curiosity. <br/><br/> <a href="/">Be a part of Equithon 2019!</a></Text>
      </Container>
    )
  }
}

export default NotFoundPage;
