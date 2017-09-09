import React from 'react';
import styled from 'styled-components';
import badge from '../assets/logo-badge.png';
import HalfDiv from '../components/HalfDiv';

const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const About = () => (
  <StyledFlex>
    <HalfDiv>
      <img src={badge} alt="Charisma App" />
    </HalfDiv>
    <HalfDiv>
      <h3>Gamification of social media around trends</h3>
      <p>Share your outfits or get inspiration</p>
      <p>Join the trend of the day and participate the competition</p>
      <p>Find out where you fit in or stand out from the crowd</p>
      <br />
      <p>
        <span>Fun</span>
        <span>Easy</span>
        <span>Addicting</span>
      </p>
    </HalfDiv>
  </StyledFlex>
);

export default About;
