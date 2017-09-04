import React, { Component } from 'react';
import styled from 'styled-components';
import appPreview from '../assets/app-preview.png';
import appStore from '../assets/app-store.png';
import HalfDiv from '../components/HalfDiv';
import Header from '../components/Header';
import { colors, fonts, responsive } from '../styles';

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
  font-size: 62px;
  @media (${responsive.md.max}) {
    font-size: 42px;
  }
  @media (${responsive.sm.max}) {
    font-size: 34px;
  }
`;

const StyledAppPreview = styled.div`
  width: 100%;
  margin-top: 50px;
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

const StyledSubscribe = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: ${fonts.large};
  width: 100%;
`;

const StyledInput = styled.input`
  background: rgb(${colors.white});
  width: 100%;
  border-radius: 8px;
  max-width: 460px;
  padding: 12px;
  font-size: 16px;
  -webkit-appearance: none;
  border: none;
  outline: none;
`;

class HomePage extends Component {
  state = {
    email: ''
  };
  updateEmailInput = ({ target }) => this.setState({ email: target.value });
  render() {
    return (
      <StyledWrapper>
        <Header />
        <StyledFlex>
          <StyledLeft>
            <StyledHero>
              {'Know the trends. Fit in or stand out. Share as you go!'}
            </StyledHero>
            <StyledAppStore>
              <img src={appStore} alt="download" />
            </StyledAppStore>
            <StyledSubscribe>
              <p>Subscribe to get early access to the beta release</p>
              <StyledInput
                value={this.state.email}
                onChange={this.updateEmailInput}
                placeholder="enter our email"
              />
            </StyledSubscribe>
          </StyledLeft>
          <StyledRight>
            <StyledAppPreview>
              <img src={appPreview} alt="iPhone App" />
            </StyledAppPreview>
          </StyledRight>
        </StyledFlex>
      </StyledWrapper>
    );
  }
}

export default HomePage;
