import React, {Component} from 'react'
import IconFinder from './IconFinder.jsx'
import Loading from './Loading.jsx'
import RainyIcon from './RainyIcon.jsx'
import Row from './Row.jsx'

export default class Landing extends Component {
	render() {
		return(
			<div className="Landing">
        {this.props.loading  && <Loading />}
        {!this.props.loading &&
          <Row className="Weather">
  					<h1>Current conditions in {this.props.currentCity}</h1>
            <div className="Weather-details">
              <h2>
                {this.props.currentTemperature} degrees
                <IconFinder icon={this.props.icon} />
                {this.props.currentCondition}
              </h2>
            </div>
          </Row>
  			}
			</div>
		)
	}
}