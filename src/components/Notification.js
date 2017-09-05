import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colors, transitions } from '../styles';

const StyledNotification = styled.div`
  transition: ${transitions.short};
  width: calc(100% - 20px);
  max-width: 400px;
  background: rgb(${colors.white});
  color: rgb(${colors.gradientRed});
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  border-radius: 5px;
  text-align: center;
  padding: 15px 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 6px 10px 2px rgba(0, 0, 0, 0.1);
  transform: ${({ show }) =>
    show ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100px, 0);'};
`;

const Notification = ({ show, message, ...props }) => (
  <StyledNotification show={show} {...props}>
    {message}
  </StyledNotification>
);

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

const reduxProps = ({ notification }) => ({
  show: notification.show,
  message: notification.message
});

export default connect(reduxProps, null)(Notification);
