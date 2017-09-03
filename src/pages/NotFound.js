import React from 'react';
import { Link } from 'react-router-dom';
import GradientWrapper from '../components/GradientWrapper';

const NotFound = () => (
  <GradientWrapper>
    <Link to="/">
      <h1>404 Page Not Found</h1>
    </Link>
  </GradientWrapper>
);
export default NotFound;
