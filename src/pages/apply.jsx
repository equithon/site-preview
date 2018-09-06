import React from 'react';
import styled, { css } from 'styled-components';
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
  height: 90%;
  padding-top: 10%;
  justify-text: center;
  margin-left: auto;
  margin-right: auto;

  font-size: 5vmin;
  font-weight: bold;
  position: relative;
  z-index: 3;

  opacity: ${props => props.visible ? 0.9 : 0};
  transform: ${props => props.visible ? css`translateY(0)` : css`translateY(1rem)`};
  transition: opacity 1s, transform 1s ease-in-out;

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
    this.state = {
      mainVisible: false
    };
  }

  componentDidMount() {
    // probably the cheesiest way to do fade-on-enter transitions lol
    this.mainTimer = setTimeout(() => this.setState({mainVisible: true}), 200);
  }

  componentWillUnmount() {
    clearTimeout(this.mainTimer);
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>Applying?</title>
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
            content="equithon, hackathon, event, social, innovation, equity, waterloo, university, 2019, apply, applications, organizer, exec"
          />
          <link
            rel="icon"
            href="/logo_tiny.png"
            sizes={['16x16', '32x32', '64x64', '128x128']}
            type="image/png"
          />
        </Helmet>
        <LavaLampBg />
        <Text visible={this.state.mainVisible}>Applications will be opening Sept 9, so mark your calendars! <br/><br/> We love your enthusiasm and are looking forward to possibly having you on the team 😄 <br/><br/> <a href="/">Meanwhile, why not sign up for updates?</a></Text>
      </Container>
    )
  }
}

export default NotFoundPage;
