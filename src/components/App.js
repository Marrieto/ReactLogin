import React from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import { useState } from 'react'



function App () {
  const [pageState, setPageState] = useState('Login')

  return (
    <div className='App'>
        <h1>{pageState}</h1>
        <button onClick={() => pageState == 'Login' ? setPageState('Logout') : setPageState('Login')}>
            Login or Logout
        </button>
    </div>
  )
}

export default App

// class App extends Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       pageState: 'login'
//     }

//     this.changeState = this.changeState.bind(this)
//   }

  

//   changeState(e){
//     console.log(e)
//     this.setState({pageState: e})
//   }

//   render() {
//     return (
//       <div className="App">
//         <LoginHeader text='Martins React-lekstuga' loginSignupHandler={this.changeState}/>
//         {this.state.pageState == 'Login' ? <LoginForm /> : <h1> register </h1>}
//       </div>
//     );
//   }
// }

// export default App;
