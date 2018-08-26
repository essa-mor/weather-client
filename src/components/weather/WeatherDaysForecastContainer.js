import React from 'react';
import PropTypes from 'prop-types';

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
		const { onChange } = this.props;
		return <WeatherDaysForecast onChange={onChange} data={data} />;
	}
}

WeatherDaysForecastContainer.propTypes ={
	onChange: PropTypes.func
};

export default WeatherDaysForecastContainer;