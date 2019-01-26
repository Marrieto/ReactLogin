import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Stay logged in" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
      </div>
    );
  }
}

LoginForm.defaultProps = {
  text: 'Change the text attribute',
  LoginSignup: 'login',
  loginSignupHandler: (e) => {console.log(`${e}`)}
}

export default LoginForm;
