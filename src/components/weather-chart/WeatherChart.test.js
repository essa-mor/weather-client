import React from 'react';
import renderer from 'react-test-renderer';

import WeatherChart from './WeatherChart';

import { data } from './TestData';


describe('WeatherChart test', () => {
	it('Renders properly', () => {
		const tree = renderer.create(<WeatherChart data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});