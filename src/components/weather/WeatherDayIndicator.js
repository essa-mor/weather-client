import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './WeatherDayIndicator.css';

function WeatherDayIndicator({ isSelected, day, img, maxTemperature, minTemperature }) {
	const cls = classNames('weather_day_indicator', { 'weather_day_indicator_selected': isSelected });
	return (<div className={cls}>
		<span className="weather_day">{day}</span>
		<img src={img} alt="" />
		<div className="weather_temperatures">
			<span className="weather_max_temperature">{maxTemperature}°</span>
			<span className="weather_min_temperature">{minTemperature}°</span>
		</div>
	</div>);
}

WeatherDayIndicator.propTypes = {
	isSelected: PropTypes.bool,
	day: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	maxTemperature: PropTypes.number.isRequired,
	minTemperature: PropTypes.number.isRequired
};

export default WeatherDayIndicator;