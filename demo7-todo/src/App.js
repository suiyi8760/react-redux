import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store/Store'
import {Provider} from 'react-redux'

import TodoApp from './TodoApp'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO LIST DEMO</h1>
                </header>
                <Provider store={store}>
                    <TodoApp></TodoApp>
                </Provider>
            </div>
        );
    }
}

export default App;
