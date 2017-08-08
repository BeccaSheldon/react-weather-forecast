import React, {Component} from 'react'
import CloudyIcon from '../icons/CloudyIcon.jsx'
import RainyIcon from '../icons/RainyIcon.jsx'
import SunnyIcon from '../icons/SunnyIcon.jsx'
import VeryCloudyIcon from '../icons/VeryCloudyIcon.jsx'

export default class IconFinder extends Component {
	render() {
		let getIcon = () => {
			if (this.props.icon === '01d' || this.props.icon === '04d') {
				return <CloudyIcon />
			}
			if (this.props.icon === '03n' || this.props.icon === '04n' || this.props.icon === '03d') {
				return <VeryCloudyIcon />
			}
			if (this.props.icon === '10n' || this.props.icon === '10d' || this.props.icon === '50d') {
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