import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HalfDiv from '../components/HalfDiv';
import logoWhite from '../assets/logo-white.svg';
import menuIcon from '../assets/menu-icon.svg';
import crossIcon from '../assets/cross-icon.svg';
import { fonts, colors, responsive, transitions } from '../styles';

const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLeft = styled(HalfDiv)`
  justify-content: flex-start;
  align-items: center;
  @media (${responsive.sm.max}) {
    justify-content: space-between;
  }
`;

const StyledBranding = styled.div`
  display: flex;
  align-items: center;
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const StyledName = styled.h2`margin: 0;`;

const StyledLogo = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  & img {
    height: 100%;
  }
`;

const StyledRight = styled(HalfDiv)`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  @media (${responsive.sm.max}) {
    display: none;
  }
`;

const StyledMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: ${fonts.large};
  font-weight: 600;
  & > li {
    display: inline;
    margin: 0 15px;
    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const StyledMobileMenuOpen = styled.div`
  height: 30px;
  & img {
    height: 100%;
  }
  @media (${responsive.sm.min}) {
    display: none;
  }
`;

const StyledMobileMenu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  transition: ${transitions.short};
  background: rgb(${colors.white});
  color: rgb(${colors.gradientRed});
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const StyledMobileMenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledMobileMenuClose = styled.div`
  height: 35px;
  position: absolute;
  top: 0;
  right: 0;
  & img {
    height: 100%;
  }
`;

const StyledMobileMenuList = styled(StyledMenuList)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > li {
    margin: 4vw;
    font-size: 12vw;
    display: block;
  }
`;

class Header extends Component {
  state = {
    toggleMenu: false
  };
  render = () => (
    <StyledFlex>
      <StyledLeft>
        <Link to="/">
          <StyledBranding>
            <StyledLogo>
              <img src={logoWhite} alt="Charisma" />
            </StyledLogo>
            <StyledName>Charisma</StyledName>
          </StyledBranding>
        </Link>
        <StyledMobileMenuOpen
          onClick={() => this.setState({ toggleMenu: true })}
        >
          <img src={menuIcon} alt="Open Menu" />
        </StyledMobileMenuOpen>
      </StyledLeft>
      <StyledRight>
        <StyledMenuList>
          <li>About</li>
          <li>Features</li>
          <li>Team</li>
          <li>Contact</li>
        </StyledMenuList>
      </StyledRight>
      <StyledMobileMenu show={this.state.toggleMenu}>
        <StyledMobileMenuContainer>
          <StyledMobileMenuClose
            onClick={() => this.setState({ toggleMenu: false })}
          >
            <img src={crossIcon} alt="Close Menu" />
          </StyledMobileMenuClose>
          <StyledMobileMenuList>
            <li>About</li>
            <li>Features</li>
            <li>Team</li>
            <li>Contact</li>
          </StyledMobileMenuList>
        </StyledMobileMenuContainer>
      </StyledMobileMenu>
    </StyledFlex>
  );
}

export default Header;
