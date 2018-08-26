import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import WeatherDayIndicator from './WeatherDayIndicator';

describe('WeatherDayIndicator test', () => {
	it('renders correctly', () => {
		const tree = renderer.create(<WeatherDayIndicator
			dt={1535274000}
			day="2018-08-23 12:00:00"
			img="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
			maxTemperature={25}
			minTemperature={20} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly - selected', () => {
		const tree = renderer.create(<WeatherDayIndicator
			dt={1535274000}
			isSelected={true}
			day="2018-08-24 12:00:00"
			img="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
			maxTemperature={25}
			minTemperature={20} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('callback works', () => {
		const callback = jest.fn();
		const wrapper = shallow(<WeatherDayIndicator
			onClick={callback}
			dt={1535274000}
			isSelected={true}
			day="2018-08-24 12:00:00"
			img="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
			maxTemperature={25}
			minTemperature={20} />);
		wrapper.find('.weather_day_indicator').simulate('click');
		expect(callback).toHaveBeenCalledWith(1535274000);
	});
});