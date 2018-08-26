import React from 'react';

import WeatherDaysForecast from './WeatherDaysForecast';
import { getWeatherDays } from './WeatherDaysApi';

class WeatherDaysForecastContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	componentDidMount() {
		getWeatherDays().then(data => this.setState({ data }));
	}

	render() {
		const { data } = this.state;
		return <WeatherDaysForecast data={data} />;
	}
}

export default WeatherDaysForecastContainer;