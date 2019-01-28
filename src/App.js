import React from "react"
import {HashRouter as Router, Route, Link, Redirect} from "react-router-dom";
import routes from './router/router.js'
import './less/frontend.less'
import demoRoute from './router/demo-router.js'
import Main from 'pages/main'

const combineRoute = routes.concat(demoRoute)
const App = () =>(
	<Router>
		<div className="container">
			{combineRoute.map((route, index) => (<Route exact key={index} {...route} />))}
		</div>
	</Router>
)

window.App2 = App
export default window.App2
