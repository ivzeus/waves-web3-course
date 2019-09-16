import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.authFunc = this.authFunc.bind(this);
  }

  authFunc() {
    const authData = { data: "Auth on my site" };
    if (window.WavesKeeper) {
      window.WavesKeeper.auth(authData)
        .then(auth => {
          console.log(JSON.stringify(auth)); //displaying the result on the console
          /*...processing data */
        }).catch(error => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
        })
    } else {
      alert("To Auth WavesKeeper should be installed.");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <div className="container">
            <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
