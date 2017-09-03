import React from 'react';
import PropTypes from 'prop-types';
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
`;

const GradientWrapper = ({ children, ...otherProps }) => (
  <StyledWrapper {...otherProps}>{children}</StyledWrapper>
);

GradientWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default GradientWrapper;
