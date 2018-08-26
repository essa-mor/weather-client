import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getWeatherDays } from './components/weather/WeatherDaysApi';

jest.mock('./components/weather/WeatherDaysApi');

it('renders without crashing', () => {
	getWeatherDays.mockImplementation(() => Promise.resolve([]));
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
