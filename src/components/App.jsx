import React, {Component} from 'react'
import Forecast from './Forecast.jsx'
import NavFooter from './NavFooter.jsx'
import NavHeader from './NavHeader.jsx'
import Start from './Start.jsx'

export default class App extends Component {
	render() {
		return(
			<div className="App">
				<div className="Wrapper">
					<NavHeader />
					<Start />
	  			<Forecast />
				</div>
				<NavFooter />
			</div>
		);
	}
}
