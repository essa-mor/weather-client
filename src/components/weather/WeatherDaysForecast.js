import React from 'react';
import PropTypes from 'prop-types';

import './WeatherDaysForecast.css';
import WeatherDayIndicator from './WeatherDayIndicator';


class WeatherDaysForecast extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = { selectedDt: null };

	}

	handleOnChange(selectedDt) {
		const { onChange } = this.props;
		this.setState({ selectedDt });
		if (onChange != null) {
			onChange(selectedDt);
		}
	}

	render() {
		const { data } = this.props;
		const { selectedDt } = this.state;
		const weatherDayIndicators = data.map(({ dt, day, img, maxTemperature, minTemperature }) => (<WeatherDayIndicator
			isSelected={selectedDt === dt}
			onClick={this.handleOnChange}
			dt={dt}
			key={day}
			day={day}
			img={`http://openweathermap.org/img/w/${img}.png`}
			maxTemperature={maxTemperature}
			minTemperature={minTemperature} />));

		return (<div className="weather_days_forecast">
			{weatherDayIndicators}
		</div>);
	}
}

WeatherDaysForecast.propTypes = {
	onChange: PropTypes.func,
	data: PropTypes.arrayOf(PropTypes.shape({
		dt: PropTypes.number.isRequired,
		day: PropTypes.string.isRequired,
		maxTemperature: PropTypes.number.isRequired,
		minTemperature: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired
	})).isRequired
};

export default WeatherDaysForecast;