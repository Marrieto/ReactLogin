import React, { Component } from 'react';
import StyledLoginHeader from '../styles/LoginHeader'
import LoginSignup from '../components/LoginSignup'

class LoginHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      loginSignup: this.props.loginSignup,
      loginSignupHandler: this.props.loginSignupHandler
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.state.loginSignupHandler(e)
  }

  render() {
    return (
      <div className="App">
          <StyledLoginHeader className='container'>
              <h1>{this.state.text}</h1>
              <LoginSignup text='Login' handleClick={this.handleClick} />
              <LoginSignup text='Signup' handleClick={this.handleClick} />
          </StyledLoginHeader>
      </div>
    );
  }
}

LoginHeader.defaultProps = {
  text: 'Change the text attribute',
  LoginSignup: 'login',
  loginSignupHandler: (e) => {console.log(`${e} <- handle this variable through assigning a 'loginSignupHandler'-property`)}
}

export default LoginHeader;
