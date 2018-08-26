import React from 'react';
import PropTypes from 'prop-types';

import './WeatherDaysForecast.css';
import WeatherDayIndicator from './WeatherDayIndicator';

function WeatherDaysForecast({ data }) {
	const weatherDayIndicators = data.map(({ dt, day, img, maxTemperature, minTemperature }) => (<WeatherDayIndicator
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

WeatherDaysForecast.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		dt: PropTypes.number.isRequired,
		day: PropTypes.string.isRequired,
		maxTemperature: PropTypes.number.isRequired,
		minTemperature: PropTypes.number.isRequired,
		img: PropTypes.string.isRequired
	})).isRequired
};

export default WeatherDaysForecast;