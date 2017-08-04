import React, {Component} from 'react'
import Link from './Link.jsx'
import Row from './Row.jsx'

export default class NavHeader extends Component {
	render() {
		return (
			<Row className="Header">
				<ul className="Navbar-items">
					<li>
						<Link
							className="pulse"
							target="_blank"
							text="Source"
							url="http://github.com/beccasheldon/vanilla-search-ui"
						></Link>
					</li>
				</ul>
			</Row>
		)
	}
}
