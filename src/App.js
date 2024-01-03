import { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Brunce" heroName="Batman">
          <p>This is children props</p>
          </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Brunce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App;
