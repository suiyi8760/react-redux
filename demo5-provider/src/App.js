import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import store from './stores/store'
import Provider from './stores/Provider'
import Counter from './component/Counter'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Counter></Counter>
                </div>
            </Provider>
        );
    }
}

export default App;
