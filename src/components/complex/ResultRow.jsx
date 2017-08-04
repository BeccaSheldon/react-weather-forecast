import React, {Component} from 'react'
import IconFinder from './IconFinder.jsx'

export default class ResultRow extends Component {
	render() {
		return (
			<tr className="Result-row">
				<td className="Result-cell">
					{this.props.date}
				</td>
				<td className="Result-cell">
					<IconFinder icon={this.props.icon} />
				</td>
				<td className="Result-cell">
					{this.props.description}
				</td>
				<td className="Result-cell">
					{this.props.max}
				</td>
				<td className="Result-cell">
					{this.props.min}
				</td>
			</tr>
		)
	}
}