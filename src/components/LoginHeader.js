import React, { Component } from 'react';
import StyledLoginHeader from '../styles/LoginHeader'
import LoginSignup from '../components/LoginSignup'
// import StyledLoginSignup from '../styles/LoginSignup'


class LoginHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    }
  }

  render() {
    return (
      <div className="App">
          <StyledLoginHeader className='container'>
              <h1>{this.state.text}</h1>
              <LoginSignup text='Login' />
              <LoginSignup text='Signup' />
          </StyledLoginHeader>
      </div>
    );
  }
}

LoginHeader.defaultProps = {
  text: 'Change the text attribute'
}

export default LoginHeader;
