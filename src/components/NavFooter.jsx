import React, {Component} from 'react'
import Link from './Link.jsx'
import Row from './Row.jsx'

export default class NavFooter extends Component {
	render() {
		return(
			<Row className="Footer">
				<ul className="Navbar-items">
					<li>
						<Link
							target="_blank"
							text="LinkedIn"
							url="http://linkedin.com/rebeccasheldon"
						/>
					</li>
					<li>
						<Link
							target="_blank"
							text="Website"
							url="http://cremedelacode.com"
						/>
					</li>
					<li>
						<Link
							target="_blank"
							text="Twitter"
							url="http://twitter.com/beccasheldon"
						/>
					</li>
					<li>
						<Link
							target="_blank"
							text="Github"
							url="http://github.com/beccasheldon"
						/>
					</li>
					<li>
						<Link
							className="pulse"
							text="Email"
							url="mailto:rebecca.e.sheldon@gmail.com"
						></Link>
					</li>
				</ul>
			</Row>
		)
	}
}