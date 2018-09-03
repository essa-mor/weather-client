import React from 'react';
import { area, line, curveNatural } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { easeLinear } from 'd3-ease';
import dateFormat from 'dateformat';

import './WeatherChart.css';

const width = 440;
const height = 60;
const labelsHeight = 30;
class WeatherChart extends React.PureComponent {
	componentDidUpdate() {
		const path = select('#line');
		if(path.node() == null) return;
		console.log('componentDidUpdate');
		var totalLength = path.node().getTotalLength();
		const t = transition()
			.duration(1000)
			.ease(easeLinear);
		
		path.attr('stroke-dasharray', totalLength + ' ' + totalLength)
			.attr('stroke-dashoffset', totalLength).transition(t)
			.attr('stroke-dashoffset', 0);

		const path2 = select('#area');
		const t2 = transition()
			.duration(1000);
			
		path2.attr('fill-opacity', 0).transition(t2)
			.attr('fill-opacity', 1);	

		const text = selectAll('text');	
		text.attr('fill-opacity', 0).transition(t2)
			.attr('fill-opacity', 1);	
	}

	render() {
		const { data } = this.props;
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
			.y0(height)
			.curve(curveNatural);

		const xLabel = scaleTime()
			.domain([Math.min(...dtArr), Math.max(...dtArr)])
			.range([0 + 10, width - 40]);

		const line1 = line()
			.x(({ dt }) => x(dt))
			.y(d => y(d.temp))
			.curve(curveNatural);

		return (<svg width={width} height={height + labelsHeight}>
			{data.map(({ dt, temp, dt_txt }, i) => (<text
				key={dt}
				className={'bottom_label' + (i === 0 && new Date(dt_txt) < new Date() ? ' bold' : '')}
				x={xLabel(dt)}
				y={y(temp) - labelsHeight / 2}
				dy=".71em" >{temp.toFixed(1)}</text>))}
			<path
				id="line"
				d={line1(data)}
				fill="none"
				stroke="rgb(255,209,24)"
				strokeWidth="2" />
			<path
				id="area"
				d={path(data)}
				fill="rgba(255, 204, 0, 0.2)" />
			{data.map(({ dt, dt_txt }) => (<text
				key={dt}
				className="bottom_label"
				x={xLabel(dt)}
				y={height + labelsHeight / 2}
				dy=".5em" >{dateFormat(new Date(dt_txt), 'HH:MM')}</text>))}
		</svg>);
	}
}

export default WeatherChart;