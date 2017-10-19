import React, { Component } from 'react';
import logo from './logo.svg';
import bootstrap from 'react-bootstrap';
import './style/App.css';
import Display from './components/display';
import request from 'request';

class App extends Component {
    constructor(props) {
      super(props);
        this.state = {
          restaurant: []
        } 
    }
  // componentDidMount() {
  //   request('http://localhost:3008/v1/restaurant', (err, response, body) => {
  //       if (err) {
  //         console.log(err)
  //       }
  //         console.log(body);

  //       this.setState({
  //           restaurant: JSON.parse(body)
  //       });
  //   });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Display/>
      </div>
    );
  }
}

export default App;
