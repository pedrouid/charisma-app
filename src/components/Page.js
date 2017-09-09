import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: ${({ center }) => (center ? 'center' : 'inherit')};
  align-items: ${({ center }) => (center ? 'center' : 'inherit')};
  justify-content: ${({ center }) => (center ? 'center' : 'inherit')};
`;

const Page = ({ children, center, ...props }) => (
  <StyledPage center={center} {...props}>
    {children}
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool
};

Page.defaultProps = {
  center: false
};

export default Page;
