import React from 'react';
import { useState } from 'react'
import { Jumbotron, Button, ButtonToolbar, Container } from 'react-bootstrap'


const pages = [
  {
    index: 0,
    name: 'Login'
  },
  {
    index: 1,
    name: 'Logout'
  },
  {
    index: 2,
    name: 'Calculator'
  },
]


function App () {
  const [pageState, setPageState] = useState(pages[0])

  let pageSwitcher = (input) => {
    let currentIndex 
    if(input == 'next'){
      currentIndex = pageState.index++
    }
    if(input == 'prev'){
      currentIndex = pageState.index--
      //setPageState(pages[Math.abs(currentIndex % pages.length)])
    }

    console.log(currentIndex);
}

  return (
    <div className='App'>
      <Jumbotron>
        <Container text-center>
        <h1 className='text-center'>{pageState.name}</h1>
        </Container>
        <Container>
        <ButtonToolbar>
          <Button bsSize='large' className="info" bsStyle="large" block onClick={() => pageSwitcher('next')}>Next</Button>
          <Button bsSize='small' bsStyle="danger" block onClick={() => pageSwitcher('prev')}>Previous</Button>
        </ButtonToolbar>
        </Container>
      </Jumbotron>
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
