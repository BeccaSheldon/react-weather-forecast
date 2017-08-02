import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App.jsx'
import './styles.scss'

ReactDOM.render(
	<AppContainer>
	  <App/>
	</AppContainer>,
	document.getElementById('app')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const NextApp = require('./components/App.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    )
  })
}