import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Countdown from './Countdown'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO LIST DEMO</h1>
                </header>
                <Countdown beginValue={10}>
                    {(count) => (<div>{count > 0 ? count : 'Happy New Year'}</div>)}
                </Countdown>
                <Countdown beginValue={5}>
                    {(count) => (<div>{count > 0 ? count : 'Rocket Go!'}</div>)}
                </Countdown>
            </div>
        );
    }
}

export default App;
