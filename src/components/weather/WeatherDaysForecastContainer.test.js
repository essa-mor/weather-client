import React from 'react';
import { mount } from 'enzyme';

import { WeatherDaysForecastContainer } from './WeatherDaysForecastContainer';
import { getWeatherDays } from './WeatherDaysApi';

const data = [
	{ dt: 1535274000, day: '2018-08-23 12:00:00', maxTemperature: 29.39, minTemperature: 27.66, img: '01d' },
	{ dt: 1535274000, day: '2018-08-24 12:00:00', maxTemperature: 27.14, minTemperature: 27.14, img: '01d' },
	{ dt: 1535274000, day: '2018-08-25 12:00:00', maxTemperature: 26.95, minTemperature: 26.95, img: '01d' },
	{ dt: 1535274000, day: '2018-08-26 12:00:00', maxTemperature: 27.01, minTemperature: 27.01, img: '02d' },
	{ dt: 1535274000, day: '2018-08-27 12:00:00', maxTemperature: 26.9, minTemperature: 26.9, img: '03d' }];

jest.mock('./WeatherDaysApi');

let wrapper;
describe('WeatherDaysForecastContainer test', () => {
	it('renders correctly', done => {
		getWeatherDays.mockImplementation(() => Promise.resolve(data));
		wrapper = mount(<WeatherDaysForecastContainer />);
		setTimeout(() => {
			wrapper.update();
			expect(wrapper.find('.weather_day_indicator')).toHaveLength(5);
			done();
		});
	});
});