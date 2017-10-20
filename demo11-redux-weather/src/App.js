import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Weather from './weather/View'

class App extends Component {

    constructor() {
        super(...arguments)
        this.state = {title: 'normal'}
    }

    showWeather = weatherState => {
        if (!weatherState) {
            return (<div>Loading</div>)
        }
        const {city, temp1, temp2, weather} = weatherState;
        return (<div>{city}:{weather}---Max Temp:{temp2}---Min Temp:{temp1}</div>)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Weather Fetch Demo</h1>
                    <h2>{this.state.title}</h2>
                </header>
                <Weather cityCode={101280101}>
                    {this.showWeather}
                </Weather>
                <Weather cityCode={101010100}>
                    {this.showWeather}
                </Weather>
                <Weather cityCode={101281101}>
                    {this.showWeather}
                </Weather>
                <Weather cityCode={101010100}>
                    {
                        weatherState => {
                            if (!weatherState) {
                                return (<div>Loading</div>)
                            }
                            const {city, temp1, temp2, weather} = weatherState;
                            return (<div>{city}:{weather}---Max Temp:{temp2}---Min Temp:{temp1}</div>)
                        }
                    }
                </Weather>
                <button onClick={
                    () => {
                        this.setState({title: 'changed'})
                    }
                }>Trigger Change
                </button>
            </div>
        );
    }
}

export default App;
