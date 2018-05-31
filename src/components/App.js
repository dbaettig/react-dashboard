import React from 'react';
import IndexPage from './IndexPage'
import Currencies from './Currencies';
import Container from './Container';
import Timer from './Timer';
import Weather from './Weather';
import Clock from './Clock';
import Todolist from './Todolist';
import '../App.css';




class App extends React.Component {


  render() {


    return (
      <div>
        <IndexPage />
        <Container>
          <Currencies />
          <Timer />
          <Weather />
          <Clock />
          <Todolist />
        </Container>
      </div>

    )
  }
}

export default App;
