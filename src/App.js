import React, {Component} from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import SimpleInterest from './Components/SimpleInterest';
import Header from './Components/Header';
import WeightAnalysis from './Components/WeightAnalysis'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import { object, element } from 'prop-types';

const API_KEY = "66d5eccc365842dfbe855503192002";

class App extends Component {
    constructor() {
        super();
        this.state = {
            location: undefined,
            temp: undefined,
            humidity: undefined,
            desc: undefined,
            icon: undefined,
            error: undefined,
            forecast5Day: undefined,
            SI: undefined,
            wgtMon: [],
            maxWeightMonth: undefined,
            minWeightMonth: undefined
        }
    }

    getWeather = async (e) => {
        e.preventDefault();
        const API_KEY = "66d5eccc365842dfbe855503192002";
        const location = e.target.elements.location.value;
        const api_call = await fetch(
            `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5`
        );
        const data = await api_call.json();

        // http://api.apixu.com/v1/forecast.json?key=66d5eccc365842dfbe855503192002&q=Paris
        console.log(data.forecast.forecastday);

        if (location) {
            this.setState({
                location: data.location.name,
                temp: data.current.temp_c,
                humidity: data.current.humidity,
                desc: data.current.condition.text,
                icon: data.current.condition.icon,
                error: "",
                forecast5Day: data.forecast.forecastday
            });
        }
    }

    calSimpleInterest = (e) => {
        console.log(e);
        e.preventDefault();
        // e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const amt = e.target.elements.Amount.value;
        const time = e.target.elements.Time.value;
        const rate = e.target.elements.Rate.value;
        const SI = ((amt * time * rate) / 100);

        if (SI) {
            this.setState({
                ...this.state,
                SI: SI
            });
        }
    }

    handleOnChange = (weightObject) => {
        console.log(weightObject);
        // this.setState({ wgtMon: this.state. });
        const tempArr = [];
        Object.keys(weightObject).forEach(element => {
           tempArr.push({
               month: element,
               weight: weightObject[element]
           });
        })
            console.log(tempArr);
        /* this.setState ({
            wgtMon: tempArr
        },this.findMinMax()); */
        
        this.findMinMax(tempArr)
    }



    findMinMax = (tempA) => {
        const temForwM = tempA
        const tempArray = tempA.sort((a, b) => {
            return parseFloat(a.weight) - parseFloat(b.weight);
        });

        if (tempA.length > 0) {
            const minWeight = tempArray[0].month;
            const maxWeight = tempArray[11].month

            this.setState({
                wgtMon: temForwM,
                minWeightMonth: minWeight,
                maxWeightMonth: maxWeight
            }, this.updateState());
        }
    };
    

    updateState = () => {}

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <React.Fragment>
                                <Title/>
                                <Form getWeather={this.getWeather}/>
                                <Weather
                                    location={this.state.location}
                                    temp={this.state.temp}
                                    humidity={this.state.humidity}
                                    desc={this.state.desc}
                                    icon={this.state.icon}
                                    error={this.state.error}
                                    forecast5Day={this.state.forecast5Day}/>
                            </React.Fragment>
                        )}/>
                    <Route
                        path="/SI"
                        render = { props => (<SimpleInterest SI={this.state.SI} calSimpleInterest={this.calSimpleInterest}/>)}
                        />
                    <Route path="/WA" render = { props => (
                        <WeightAnalysis  wgtMon={this.state.wgtMon} maxWeightMonth={this.state.maxWeightMonth} minWeightMonth={this.state.minWeightMonth} handleOnChange={this.handleOnChange} />
                    )}/>

                    
                </div>
            </Router>
        );

    }
}

export default App;
