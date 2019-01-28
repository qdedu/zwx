import React from "react"
import ReactDOM from 'react-dom';
import './config'
import './utils/index'
import 'antd-mobile/dist/antd-mobile.css';
import './utils/tools/Vconsole'
import './utils/hybrid/bridge.js'
import { Store } from 'edu-common'
import App from './App.js'
import classnames from 'classnames'

window.store = Store.localStore 
window.Cookies = Store.cookieStore
window.classnames = classnames

ReactDOM.render( <App />, document.getElementById('root'));

// Webpack Hot Module Replacement API
import {AppContainer} from 'react-hot-loader';
if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default; // eslint-disable-line global-require
		ReactDOM.render(
			<AppContainer>
				<NextApp/>
			</AppContainer>,
			document.getElementById('root')
		)
	})
}
