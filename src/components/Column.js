import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledColumn = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Column = ({ children, ...otherProps }) => (
  <StyledColumn {...otherProps}>{children}</StyledColumn>
);

Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default Column;
