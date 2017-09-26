import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import jsonp from 'jsonp';
import { notificationShow } from '../redux/_notification';
import { fonts, colors, responsive } from '../styles';

const StyledSubscribe = styled.div`
  margin-top: 10px;
  font-weight: 600;
  pos: ${fonts.large};
  width: 100%;
  & form {
    position: relative;
  }
  & p {
    position: absolute;
  }
  & input {
    background: rgb(${colors.white});
    width: 100%;
    border-radius: 8px;
    max-width: 460px;
    padding: 12px;
    font-size: 16px;
    -webkit-appearance: none;
    border: none;
    outline: none;
  }
  @media (${responsive.sm.min}) {
    margin-top: 40px;
  }
`;

class SubscribeForm extends Component {
  state = {
    sending: false,
    input: ''
  };
  onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    if (!this.state.input || this.state.input.length < 5 || this.state.input.indexOf('@') === -1) {
      notificationShow('The email you provide is incomplete');
      return;
    }
    const url = `//charisma-app.us16.list-manage.com/subscribe/post-json?u=5be2d0cb8242b5ca65e0236b2&amp;id=661d067918&EMAIL=${encodeURIComponent(
      this.state.input
    )}`;
    this.setState(
      {
        sending: true
      },
      () =>
        jsonp(
          url,
          {
            param: 'c'
          },
          (err, data) => {
            this.setState({ sending: false });
            if (err) {
              this.props.notificationShow('Something went wrong, please try again');
            } else if (data.result !== 'success') {
              this.props.notificationShow('Something went wrong, please try again');
            } else {
              this.props.notificationShow("Thanks! We've sent you a confirmation email.");
            }
          }
        )
    );
  };
  render() {
    return (
      <StyledSubscribe>
        <form method="post" noValidate onSubmit={this.onSubmit}>
          <input
            type="email"
            name="EMAIL"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
            placeholder="youremail@address.com"
          />
          {!!this.state.sending && <p>Sending... </p>}
        </form>
      </StyledSubscribe>
    );
  }
}
export default connect(null, { notificationShow })(SubscribeForm);
