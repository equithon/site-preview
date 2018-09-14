import React from 'react';
import styled, { css } from 'styled-components';
import LavaLampBg from '../components/LavaLampBg';
import Helmet from 'react-cap';
import { mediaSize } from '../configOptions.js';


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
  padding-bottom: 2vw;
  text-align: center;
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

  ${mediaSize.mobile`
    width: 90%;
    font-size: 7vmin;
    padding-bottom: 7vw;
  `}
`;

const SecondaryText = styled(Text)`
  padding-top: 3vw;
  font-weight: normal;
  font-size: 2vmin;

  & a {
    font-size: inherit;
  }

  ${mediaSize.mobile`
    font-size: 4vmin;
    padding-top: 8vw;
  `}
`

const Link = styled.a`
  color: inherit;
  opacity: 0.8;
  text-decoration: none;

  &:hover {
    opacity: 1;
    transition: opacity 500ms;
  }
`
const AppForm = styled.iframe`
  height: 80%;
  width: 100%;
  position: relative;
  z-index: 3;

  opacity: ${props => props.visible ? 0.9 : 0};
  transform: ${props => props.visible ? css`translateY(0)` : css`translateY(1rem)`};
  transition: opacity 1s, transform 1s ease-in-out;
`


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
          <title>Apply</title>
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
          <meta
            property="og:title"
            content="Equithon Executive Applications"
          />
          <meta
            property="og:description"
            content="Apply now to be a part of the 2019 committee!"
          />
          <meta
            property="og:site_name"
            content="Equithon"
          />
          <meta
            property="og:image"
            content="https://equithon.org/apply_og.jpg"
          />
          <link
            rel="icon"
            href="/logo_tiny.png"
            sizes={['16x16', '32x32', '64x64', '128x128']}
            type="image/png"
          />
        </Helmet>
        <LavaLampBg />
        <Text visible={this.state.mainVisible}>Exec Application</Text>
        <AppForm
          visible={this.state.mainVisible}
          src="https://docs.google.com/forms/d/e/1FAIpQLSdi8hdNmfdRcgTSo_o1dvlyyk3xeO_HXqfNH4iQdepSrOhxHw/viewform?embedded=true"
          scrolling="yes"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading...
        </AppForm>
        <SecondaryText visible={this.state.mainVisible}>
          <Link href="/">&lt; Home</Link>
        </SecondaryText>
      </Container>
    )
  }
}

export default NotFoundPage;
