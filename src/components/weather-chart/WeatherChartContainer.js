import React from 'react';
import WeatherChart from './WeatherChart';
import { getWeatherDay } from '../weather/WeatherDaysApi';

class WeatherChartContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { data: [], dt: null };
	}

	fetchData(){
		const { match: { params: { dt } } } = this.props;
		debugger;
		if(dt !== this.state.dt && !isNaN(dt)){
			getWeatherDay(dt).then(data => this.setState({ data, dt }));
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate() {
		this.fetchData();
	}

	render() {
		const { data } = this.state;
		return <WeatherChart data={data} />;
	}
}

export default WeatherChartContainer;