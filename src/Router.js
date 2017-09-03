import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import GradientBackground from './components/GradientBackground';
import Column from './components/Column';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

class Router extends Component {
  componentDidMount() {
    window.rogueDispatch = this.context.store.dispatch;
    window.browserHistory = this.context.router.history;
  }
  render = () => (
    <StyledWrapper>
      <GradientBackground />
      <Column>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Column>
    </StyledWrapper>
  );
}

Router.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Router;
