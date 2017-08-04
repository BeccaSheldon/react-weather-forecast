import React, {Component} from 'react'
import Button from '../basic/Button.jsx'
import Input from '../basic/Input.jsx'
import Row from '../layout/Row.jsx'

export default class Search extends Component {
	render() {
		return(
			<Row className="Search">
			  <Input
			  	changeHandler={this.props.changeHandler}
			  	className="Search-input"
			  	placeholder="Type in a city name, like 'San Francisco'"
			  	type="text"
			  />
			  <Button
			    className="Search-button"
			    clickHandler={this.props.clickHandler}
			  />
			</Row>
		)
	}
}