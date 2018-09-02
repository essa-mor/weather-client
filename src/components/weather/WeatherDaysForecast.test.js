import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import WeatherDaysForecast from './WeatherDaysForecast';

import { data } from './TestData';

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

	it('initilize selectedDt', () => {
		const tree = renderer.create(<WeatherDaysForecast data={data} selectedDt={1535275000} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('changing selectedDt prop doesn\'t change state', () => {
		const wrapper = mount(<WeatherDaysForecast data={data}  selectedDt={1535275000}/>);
		wrapper.find('.weather_day_indicator').first().simulate('click');
		wrapper.update();
		expect(wrapper.state().selectedDt).toBe(1535274000);
		wrapper.setProps({ selectedDt: 1535278000 });
		expect(wrapper.props().selectedDt).toBe(1535278000);
		expect(wrapper.state().selectedDt).toBe(1535274000);
		
	});
});