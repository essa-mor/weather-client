import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import WeatherChart from './WeatherChart';

const data = [
	{ dt: 1535889600, dt_txt: '2018-09-02 12:00:00', temp: 29.61 },
	{ dt: 1535900400, dt_txt: '2018-09-02 15:00:00', temp: 29.11 },
	{ dt: 1535911200, dt_txt: '2018-09-02 18:00:00', temp: 28.46 },
	{ dt: 1535922000, dt_txt: '2018-09-02 21:00:00', temp: 27.5 },
	{ dt: 1535932800, dt_txt: '2018-09-03 00:00:00', temp: 27.24 },
	{ dt: 1535943600, dt_txt: '2018-09-03 03:00:00', temp: 26.97 },
	{ dt: 1535954400, dt_txt: '2018-09-03 06:00:00', temp: 26.69 },
	{ dt: 1535965200, dt_txt: '2018-09-03 09:00:00', temp: 27.19 }];


describe('WeatherChart test', () => {
	it('Renders properly', () => {
		const tree = renderer.create(<WeatherChart data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});