import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom"

const A = (props) => {
    return (
        <div>123</div>
    ) 
}
const B = (props) => {
    return (
        <div>456</div>
    ) 
}
const C = (props) => {
    return (
        <div>789</div>
    ) 
}

class RouterExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <div>
                    <Link to='/123'>123 &nbsp;&nbsp;</Link>
                    <Link to='/456'>456 &nbsp;&nbsp;</Link>
                    <Link to='/789'>789 &nbsp;&nbsp;</Link>
                    <Route path='/123' component={A} />
                    <Route path='/456' component={B} />
                    <Route path='/789' component={C} />
                </div>
            </Router>
        )
    }
}
 
export default RouterExample