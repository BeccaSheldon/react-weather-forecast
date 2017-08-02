import React, {Component} from 'react'

export default class Button extends Component {
	render() {
		return (
	    <button className={this.props.className} onClick={this.props.clickHandler}>
	      {this.props.text ? this.props.text : 'Submit'}
	    </button>
	  )
	}
}