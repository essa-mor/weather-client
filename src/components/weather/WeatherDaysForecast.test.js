import React from 'react';
import renderer from 'react-test-renderer';

import WeatherDaysForecast from './WeatherDaysForecast';

const data = [
	{ day: '2018-08-23 12:00:00', maxTemperature: 29.39, minTemperature: 27.66, img: '01d' },
	{ day: '2018-08-24 12:00:00', maxTemperature: 27.14, minTemperature: 27.14, img: '01d' },
	{ day: '2018-08-25 12:00:00', maxTemperature: 26.95, minTemperature: 26.95, img: '01d' },
	{ day: '2018-08-26 12:00:00', maxTemperature: 27.01, minTemperature: 27.01, img: '02d' },
	{ day: '2018-08-27 12:00:00', maxTemperature: 26.9, minTemperature: 26.9, img: '03d' }];

describe('WeatherDaysForecast test', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<WeatherDaysForecast data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});