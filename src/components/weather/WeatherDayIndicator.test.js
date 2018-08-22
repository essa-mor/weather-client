import React from 'react';
import renderer from 'react-test-renderer';

import WeatherDayIndicator from './WeatherDayIndicator';

describe('WeatherDayIndicator test', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<WeatherDayIndicator
			day="Wen"
			img="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
			maxTemperature={25}
			minTemperature={20} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - selected', () => {
		const tree = renderer.create(<WeatherDayIndicator
			isSelected={true}
			day="Wen"
			img="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
			maxTemperature={25}
			minTemperature={20} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});