import React, {Component} from 'react'
import CloudyIcon from './CloudyIcon.jsx'
import RainyIcon from './RainyIcon.jsx'
import SunnyIcon from './SunnyIcon.jsx'
import VeryCloudyIcon from './VeryCloudyIcon.jsx'

export default class IconFinder extends Component {
	render() {
		let getIcon = () => {
			if (this.props.icon === '01d') {
				return <CloudyIcon />
			}
			if (this.props.icon === '03n') {
				return <VeryCloudyIcon />
			}
			if (this.props.icon === '10n' || this.props.icon === '10d') {
				return <RainyIcon />
			}
			if (this.props.icon === '01n' || this.props.icon === '02d')  {
				return <SunnyIcon />
			}
			if (this.props.icon !== 'djfdk') {
				return this.props.icon
			}
		}
		return (
			<span>{getIcon()}</span>
		)
	}
}