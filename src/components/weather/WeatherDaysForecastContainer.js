import React from 'react';
import { withRouter } from 'react-router-dom';

import WeatherDaysForecast from './WeatherDaysForecast';
import { getWeatherDays } from './WeatherDaysApi';

export class WeatherDaysForecastContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = { data: [], selectedDt: null };
		this.handleOnChange = this.handleOnChange.bind(this);
	}

	handleOnChange(dt) {
		const { history } = this.props;
		this.setState({ selectedDt: dt });
		history.push(`/weather-client/${dt}`);
	}

	updateData(data){
		const { selectedDt } = this.state;
		this.setState({ data });
		if(selectedDt == null && data.length > 0){
			this.handleOnChange(data[0].dt);
		}
	}

	componentDidMount() {
		const { location } = this.props;
		getWeatherDays().then(data => this.updateData(data));
		const params = location && location.pathname.split('/').filter(i => i !== '');
		if (params != null && params.length > 0 && !isNaN(params[params.length-1])) {
			this.setState({ selectedDt: parseInt(params[params.length-1]) });
		}
	}

	render() {
		const { data, selectedDt } = this.state;
		return <WeatherDaysForecast onChange={this.handleOnChange} data={data} selectedDt={selectedDt} />;
	}
}

export default withRouter(WeatherDaysForecastContainer);