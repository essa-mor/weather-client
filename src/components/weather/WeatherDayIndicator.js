import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dateFormat from 'dateformat';

import './WeatherDayIndicator.css';

function WeatherDayIndicator({ isSelected, day, img, maxTemperature, minTemperature }) {
	const cls = classNames('weather_day_indicator', { 'weather_day_indicator_selected': isSelected });
	return (<div className={cls}>
		<span className="weather_day">{dateFormat(new Date(day), 'ddd')}</span>
		<img src={img} alt="" />
		<div className="weather_temperatures">
			<span className="weather_max_temperature">{Math.round(maxTemperature)}°</span>
			<span className="weather_min_temperature">{Math.round(minTemperature)}°</span>
		</div>
	</div>);
}

WeatherDayIndicator.propTypes = {
	isSelected: PropTypes.bool,
	dt: PropTypes.number.isRequired,
	day: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	maxTemperature: PropTypes.number.isRequired,
	minTemperature: PropTypes.number.isRequired
};

export default WeatherDayIndicator;