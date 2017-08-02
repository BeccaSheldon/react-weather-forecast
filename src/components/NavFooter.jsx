import React, {Component} from 'react'
import Link from './Link.jsx'

export default class NavFooter extends Component {
	render() {
		return(
			<div className="Row">
				<ul>
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
				</ul>
			</div>
		)
	}
}