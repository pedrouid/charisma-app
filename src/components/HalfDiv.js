import styled from 'styled-components';
import { responsive } from '../styles';

const HalfDiv = styled.div`
  display: flex;
  width: 50%;
  @media (${responsive.sm.max}) {
    width: 100%;
  }
`;

export default HalfDiv;
