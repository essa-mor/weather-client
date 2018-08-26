import React from 'react';
import WeatherChart from './WeatherChart';

function WeatherChartContainer({ match }) {
	return <WeatherChart dt={match.params.dt}/>;
}

export default WeatherChartContainer;