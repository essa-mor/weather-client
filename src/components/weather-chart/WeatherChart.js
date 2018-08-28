import React from 'react';
import { area } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';
import dateFormat from 'dateformat';

import './WeatherChart.css';

const width = 440;
const height = 60;
const labelsHeight = 30;
class WeatherChart extends React.PureComponent {
	render() {
		const { data } = this.props;
		console.log(data);
		const temps = data.map(({ temp }) => temp);
		const dtArr = data.map(({ dt }) => dt);

		const x = scaleTime()
			.domain([Math.min(...dtArr), Math.max(...dtArr)])
			.range([0, width]);

		const y = scaleLinear()
			.domain([Math.min(...temps) - 3, Math.max(...temps) + 3])
			.range([height, 0]);

		const path = area()
			.x(({ dt }) => x(dt))
			.y1(d => y(d.temp))
			.y0(height);

		const xLabel = scaleTime()
			.domain([Math.min(...dtArr), Math.max(...dtArr)])
			.range([0 + 10, width - 40]);

		return (<svg width={width} height={height + labelsHeight}>
			{data.map(({ dt, temp, dt_txt }, i) => (<text
				key={dt}
				class={'bottom_label' + (i === 0 && new Date(dt_txt) < new Date() ? ' bold' : '')}
				x={xLabel(dt)}
				y={y(temp) - labelsHeight / 2}
				dy=".71em" >{temp.toFixed(1)}</text>))}
			<path
				d={path(data)}
				fill="rgba(255, 204, 0, 0.2)" />
			{data.map(({ dt, dt_txt }) => (<text
				key={dt}
				class="bottom_label"
				x={xLabel(dt)}
				y={height + labelsHeight / 2}
				dy=".5em" >{dateFormat(new Date(dt_txt), 'HH:MM')}</text>))}
		</svg>);
	}
}

export default WeatherChart;