import React from 'react';
import renderer from 'react-test-renderer';

import WeatherDaysForecast from './WeatherDaysForecast';

describe('WeatherDaysForecast test', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<WeatherDaysForecast />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});