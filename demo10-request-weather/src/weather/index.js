import {Component} from 'react'
import PropTypes from 'prop-types'

export default class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: null,
            cityCode: props.cityCode
        }
    }

    static propTypes = {
        cityCode: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, this.props, nextProps.children === this.props.children);
        console.log(nextState, this.state, nextState.weather === this.state.weather);
        return true;
    }

    componentDidMount() {
        const apiUrl = `/data/cityinfo/${this.state.cityCode}.html`

        fetch(apiUrl)
            .then(res => {
                console.log(res);
                if (res.status !== 200) {
                    throw new Error(`Fail to get response with ${res.status}`)
                }
                res.json()
                    .then(resJson => {
                        console.log(resJson, '++json');
                        this.setState({weather: resJson.weatherinfo})
                    })
                    .catch(err => this.setState({weather: null}))
            })
            .catch(err => this.setState({weather: null}))
    }

    render() {
        return this.props.children(this.state.weather)
    }
}