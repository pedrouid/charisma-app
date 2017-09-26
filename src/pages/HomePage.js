import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appPreview from '../assets/app-preview.png';
import appStore from '../assets/app-store.png';
import HalfDiv from '../components/HalfDiv';
import Header from '../components/Header';
import SubscribeForm from '../components/SubscribeForm';
import { responsive } from '../styles';
import { subscribeSubmit } from '../redux/_subscribe';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLeft = styled(HalfDiv)`
  text-align: left;
  justify-content: center;
  flex-direction: column;
  & > * {
    display: inline-block;
  }
`;

const StyledRight = styled(HalfDiv)`
  justify-content: flex-end;
  align-items: center;
`;

const StyledHero = styled.h1`
  font-weight: 900;
  font-size: 60px;
  @media (${responsive.md.max}) {
    font-size: 42px;
  }
  @media (${responsive.sm.max}) {
    font-size: 9vw;
    margin-top: 30px;
  }
`;

const StyledAppPreview = styled.div`
  width: 100%;
  margin-top: 30px;
  & img {
    width: 100%;
    padding: 10px;
  }
  @media (${responsive.sm.min}) {
    margin-top: 0;
    max-width: 600px;
    padding-top: 7%;
    padding-left: 30%;
  }
`;

const StyledAppStore = styled.div`
  height: 50px;
  & img {
    height: 100%;
  }
`;

const HomePage = () => (
  <StyledWrapper>
    <Header />
    <StyledFlex>
      <StyledLeft>
        <StyledHero>
          <span>Know the trends.</span>
          <br />
          <span>Fit in or stand out.</span>
          <br />
          <span>Share as you go!</span>
        </StyledHero>
        <StyledAppStore>
          <img src={appStore} alt="download" />
        </StyledAppStore>
        <SubscribeForm />
      </StyledLeft>
      <StyledRight>
        <StyledAppPreview>
          <img src={appPreview} alt="iPhone App" />
        </StyledAppPreview>
      </StyledRight>
    </StyledFlex>
  </StyledWrapper>
);

HomePage.propTypes = {
  subscribeSubmit: PropTypes.func.isRequired
};

export default connect(null, { subscribeSubmit })(HomePage);
