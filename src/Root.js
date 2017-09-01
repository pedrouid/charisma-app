import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from './styles';

const StyledWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    rgb(${colors.gradientRed}) 0%,
    rgb(${colors.gradientOrange}) 100%
  );
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Root extends Component {
  render() {
    return (
      <StyledWrapper>
        <h1>Hello World!</h1>
      </StyledWrapper>
    );
  }
}

export default Root;
