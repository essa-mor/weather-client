import React from 'react';

import './WeatherDaysForecast.css';
import WeatherDayIndicator from './WeatherDayIndicator';

function WeatherDaysForecast() {
	return (<div className="weather_days_forecast">
		<WeatherDayIndicator
			isSelected={true}
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/rain.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/thunderstorms.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/rain_light.png"
			maxTemperature={31}
			minTemperature={25} />
		<WeatherDayIndicator
			day="Wed"
			img="https://ssl.gstatic.com/onebox/weather/48/sunny_s_rain.png"
			maxTemperature={31}
			minTemperature={25} />
	</div>);
}

export default WeatherDaysForecast;