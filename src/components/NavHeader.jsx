import React, {Component} from 'react'
import Link from './Link.jsx'

export default class NavHeader extends Component {
	render() {
		return (
			<div className="Row">
				<ul>
					<li>
						<Link
							className="pulse"
							target="_blank"
							text="Source"
							url="http://github.com/beccasheldon/vanilla-search-ui"
						></Link>
					</li>
					<li>
					<Link
						className="pulse"
						text="Contact"
						url="mailto:rebecca.e.sheldon@gmail.com"
					></Link>
					</li>
				</ul>
			</div>
		)
	}
}
