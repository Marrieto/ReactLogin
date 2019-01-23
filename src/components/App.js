import React, { Component } from 'react';
import LoginHeader from './LoginHeader';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pageState: 'login'
    }

    this.changeState = this.changeState.bind(this)
  }

  changeState(e){
    console.log(e)
    this.setState({pageState: e})
  }

  render() {
    return (
      <div className="App">
        <LoginHeader text='Martins React-lekstuga' loginSignupHandler={this.changeState}/>
        {this.state.pageState == 'Login' ? <h1> login </h1> : <h1> register </h1>}
      </div>
    );
  }
}

export default App;
