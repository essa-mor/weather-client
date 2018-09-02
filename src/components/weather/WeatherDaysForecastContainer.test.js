import React from 'react';
import { mount } from 'enzyme';

import { WeatherDaysForecastContainer } from './WeatherDaysForecastContainer';
import { getWeatherDays } from './WeatherDaysApi';
import { data } from './TestData';

jest.mock('./WeatherDaysApi');

let wrapper;
describe('WeatherDaysForecastContainer test', () => {
	it('renders correctly', done => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer history={[]} />);
		setTimeout(() => {
			wrapper.update();
			expect(wrapper.find('.weather_day_indicator')).toHaveLength(5);
			done();
		});
	});

	it('Select first item', done => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer history={[]} />);
		setTimeout(() => {
			wrapper.update();
			expect(wrapper.state().selectedDt).toBe(1535274000);
			done();
		});
	});

	it('Select from history', done => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer history={[]} location={{ pathname: '1535275000' }} />);
		setTimeout(() => {
			wrapper.update();
			expect(wrapper.state().selectedDt).toBe(1535275000);
			done();
		});
	});
});