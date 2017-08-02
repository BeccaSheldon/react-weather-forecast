import React, {Component} from 'react';

export default class Input extends Component {
	render() {
	  return (
	  	<input
	    	className={this.props.className}
	  		name="city"
	  		onChange={this.props.changeHandler}
	  		type={this.props.type}
	  		value={this.props.value}
	  	/>
	  )
	}
}