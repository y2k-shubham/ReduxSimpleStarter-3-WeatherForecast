import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
	function _getAverage(data) {
		return _.round(_.sum(data) / data.length);
	}

	return (
		<div>
			<Sparklines
				height={135}
				width={240}
				data={props.data}>
				<SparklinesLine color={props.color}/>
				<SparklinesReferenceLine  type='avg' />
			</Sparklines>
			<div>{_getAverage(props.data)}{props.units}</div>
		</div>
	);
}