import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;t
`;

const StyledCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => (
  <StyledWrapper>
    <Header />
    <StyledCenter>
      <Link to="/">
        <h1>404 Page Not Found</h1>
      </Link>
    </StyledCenter>
  </StyledWrapper>
);
export default NotFound;
