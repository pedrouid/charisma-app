import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

const StyledWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    rgb(${colors.gradientRed}) 0%,
    rgb(${colors.gradientOrange}) 100%
  );
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -10;
`;

const GradientBackground = () => <StyledWrapper />;
export default GradientBackground;
