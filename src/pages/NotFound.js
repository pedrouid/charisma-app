import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';

const NotFound = () => (
  <Page center>
    <Link to="/">
      <h1>404 Page Not Found</h1>
    </Link>
  </Page>
);
export default NotFound;
