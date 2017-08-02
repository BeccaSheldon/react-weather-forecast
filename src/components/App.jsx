import React, {Component} from 'react';
import Forecast from './Forecast.jsx';
import NavHeader from './NavHeader.jsx';
import NavFooter from './NavFooter.jsx';

export default class App extends Component {
	render() {
		return(
			<div className="App">
				<NavHeader />
				<Forecast />
				<NavFooter />
			</div>
		);
	}
}
