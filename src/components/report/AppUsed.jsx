import React from "react"
import "./less/AppUsed.less"
const appList = [{
    "id":1,
    "name":"错题本",
    "num":23,
},{
    "id":2,
    "name":"作业",
    "num":23,
},{
    "id":3,
    "name":"小题智练",
    "num":28,
}]
const listItems = [...appList].map((app) =>
    <div className="app">
        <span>{app.name}</span>
        <span>{app.num}</span>
    </div>

);
class AppUsed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return(
        <div>
            <div>{listItems}</div>
        </div>
        )
    }
}
 
export default AppUsed;