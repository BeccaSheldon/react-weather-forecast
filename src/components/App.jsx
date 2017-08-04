import React, {Component} from 'react'
import Forecast from './complex/Forecast.jsx'
import NavFooter from './layout/NavFooter.jsx'
import NavHeader from './layout/NavHeader.jsx'
import Start from './complex/Start.jsx'

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
