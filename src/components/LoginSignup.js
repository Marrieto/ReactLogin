import React, { Component } from 'react';
import StyledLoginSignup from '../styles/LoginSignup'


class LoginSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      clickHandler: this.props.handleClick
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.state.clickHandler(this.state.text)
  }

  render() {
    return (
      <div>
          <StyledLoginSignup onClick={this.handleClick}>
            <p>{this.state.text}</p>
          </StyledLoginSignup >
      </div>
    );
  }
}

LoginSignup.defaultProps = {
  text: 'Login',
  clickHandler: (e) => {console.log(e)}
}

export default LoginSignup;
