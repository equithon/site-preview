import React from 'react';
import styled from 'styled-components';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        fam there is nothing here go back to <a href='/'>home</a>
      </div>
    )
  }
}

export default NotFoundPage;
