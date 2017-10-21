import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import store from './Store'
import {Provider} from 'react-redux'

import {View as CitySelector} from './CitySelector'
import {View as Weather} from './weather'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Weather Fetch Demo</h1>
                    </header>
                    <CitySelector></CitySelector>
                    <Weather></Weather>
                </div>
            </Provider>
        );
    }
}

export default App;
