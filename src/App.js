import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WeatherDaysForecastContainer from './components/weather/WeatherDaysForecastContainer';
import WeatherChartContainer from './components/weather-chart/WeatherChartContainer';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<WeatherDaysForecastContainer/>
					<Route path="/:dt" component={WeatherChartContainer} /> 
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
