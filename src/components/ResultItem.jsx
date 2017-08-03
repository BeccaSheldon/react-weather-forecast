import React, {Component} from 'react'

export default class ResultItem extends Component {

	render() {
		return (
			<div className="Result-item">
				<ul>
					<li className="Result-item-heading">
						{this.props.date}
					</li>
					<li className="Result-item-subheading">
						{this.props.description}
					</li>
					<li className="Result-item-row">
						<i className="fa fa-thermometer"></i>
						{this.props.day}
					</li>
					<li className="Result-item-row">
						<i className="fa fa-tint"></i>
						{this.props.humidity}
					</li>
					<li className="Result-item-row">
						<i className="fa fa-angle-double-up"></i>
						{this.props.max}
					</li>
					<li className="Result-item-row">
						<i className="fa fa-angle-double-down"></i>
						{this.props.min}
					</li>
					<li className="Result-item-row">
						<i className="fa fa-moon"></i>
						{this.props.night}
					</li>
				</ul>
			</div>
		)
	}
}