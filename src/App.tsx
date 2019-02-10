import * as React from 'react'
import './App.css'
import spaceLogo from './images/spacex.png'
import Launches from './components/Launches'

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <img src={spaceLogo} />
        <Launches />
      </div>
    );
  }
}

export default App;
