import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';
import { getWeatherDays, getWeatherDay } from './components/weather/WeatherDaysApi';
import { data as daysData } from './components/weather/TestData';
import { data as dayData } from './components/weather-chart/TestData';

jest.mock('./components/weather/WeatherDaysApi');

describe('App test', () => {
	it('renders without crashing', () => {
		getWeatherDays.mockImplementation(() => Promise.resolve([]));
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	
	it('renders properly', async ()  => {
		getWeatherDays.mockImplementation(() => Promise.resolve(daysData));
		getWeatherDay.mockImplementation(() => Promise.resolve(dayData));
		const wrapper = shallow(<App />);
		await Promise.resolve();
		wrapper.update();
		expect(toJson(wrapper)).toMatchSnapshot();
	});	
});