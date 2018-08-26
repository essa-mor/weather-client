import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import WeatherDaysForecast from './WeatherDaysForecast';

const data = [
	{ dt: 1535274000, day: '2018-08-23 12:00:00', maxTemperature: 29.39, minTemperature: 27.66, img: '01d' },
	{ dt: 1535275000, day: '2018-08-24 12:00:01', maxTemperature: 30.39, minTemperature: 27.14, img: '01d' },
	{ dt: 1535276000, day: '2018-08-25 12:00:02', maxTemperature: 31.39, minTemperature: 26.95, img: '01d' },
	{ dt: 1535277000, day: '2018-08-26 12:00:03', maxTemperature: 32.39, minTemperature: 27.01, img: '02d' },
	{ dt: 1535278000, day: '2018-08-27 12:00:04', maxTemperature: 33.69, minTemperature: 26.9, img: '03d' }];

describe('WeatherDaysForecast test', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<WeatherDaysForecast data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('onChange works', () => {
		const callback = jest.fn();
		const wrapper = mount(<WeatherDaysForecast data={data} onChange={callback} />);
		wrapper.find('.weather_day_indicator').first().simulate('click');
		wrapper.update();
		expect(wrapper.find('.weather_day_indicator_selected .weather_max_temperature').text()).toBe('29°');
		expect(callback).toHaveBeenCalledWith(1535274000);
		wrapper.find('.weather_day_indicator').last().simulate('click');
		expect(wrapper.find('.weather_day_indicator_selected .weather_max_temperature').text()).toBe('34°');
		expect(callback).toHaveBeenLastCalledWith(1535278000);
	});
});