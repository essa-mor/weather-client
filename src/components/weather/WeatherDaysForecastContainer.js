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
		history.push(`/${dt}`);
	}

	componentDidMount() {
		const { location } = this.props;
		getWeatherDays().then(data => this.setState({ data }));
		const params = location && location.pathname.split('/').filter(i => i !== '');
		if (params != null && params.length > 0) {
			this.setState({ selectedDt: parseInt(params[0]) });
		}
	}

	render() {
		const { data, selectedDt } = this.state;
		return <WeatherDaysForecast onChange={this.handleOnChange} data={data} selectedDt={selectedDt} />;
	}
}

export default withRouter(WeatherDaysForecastContainer);