import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { WeatherDaysForecastContainer } from './WeatherDaysForecastContainer';
import { getWeatherDays } from './WeatherDaysApi';
import { data } from './TestData';

jest.mock('./WeatherDaysApi');

let wrapper;
describe('WeatherDaysForecastContainer test', () => {
	it('renders correctly - render all', async () => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		const tree = mount(<WeatherDaysForecastContainer history={[]} />);
		await tree.instance().componentDidMount();
		tree.update();
		expect(toJson(tree)).toMatchSnapshot();
	});

	it('renders correctly', done => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer history={[]} />);
		setTimeout(() => {
			wrapper.update();
			expect(wrapper.find('.weather_day_indicator')).toHaveLength(5);
			done();
		});
	});

	it('Select first item', async () => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer history={[]} />);
		await wrapper.instance().componentDidMount();
		wrapper.update();
		expect(wrapper.state().selectedDt).toBe(1535274000);
	});

	it('Select from history', () => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer history={[]} location={{ pathname: '1535275000' }} />);
		expect(wrapper.state().selectedDt).toBe(1535275000);
	});
});