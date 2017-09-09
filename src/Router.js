import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import GradientBackground from './components/GradientBackground';
import Column from './components/Column';
import Notification from './components/Notification';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
`;

const pages = [
  { name: 'About', path: '/about', component: About },
  { name: 'Team', path: '/team', component: Team },
  { name: 'Contact', path: '/contact', component: Contact }
];

class Router extends Component {
  componentDidMount() {
    window.rogueDispatch = this.context.store.dispatch;
    window.browserHistory = this.context.router.history;
  }
  render = () => (
    <StyledWrapper>
      <GradientBackground />
      <Column>
        <StyledContent>
          <Header pages={pages} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            {pages.map(page => (
              <Route
                key={`route-${page.name}`}
                exact
                path={page.path}
                component={page.component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </StyledContent>
      </Column>
      <Notification />
    </StyledWrapper>
  );
}

Router.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Router;
