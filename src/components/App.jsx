import React, {Component} from 'react'
import Start from './Start.jsx'
import NavFooter from './NavFooter.jsx'
import NavHeader from './NavHeader.jsx'

export default class App extends Component {
	render() {
		return(
			<div className="App">
				<div className="Wrapper">
					<NavHeader />
					<Start />
				</div>
				<NavFooter />
			</div>
		);
	}
}
