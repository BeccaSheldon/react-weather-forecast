import React, {Component} from 'react'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Row from './Row.jsx'

export default class Search extends Component {
	render() {
		return(
			<Row className="Search">
			  <Input
			  	changeHandler={this.props.changeHandler}
			  	className="Search-input"
			  	type="text"
			  />
			  <Button
			    className="Search-button"
			    clickHandler={this.props.clickHandler}
			    text="Search"
			  />
			</Row>
		)
	}
}