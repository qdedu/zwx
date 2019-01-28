import React,{Component} from 'react'

class RouteConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    get a(){
        return util.getSearchByName('a')
    }

    get b(){
        return util.getSearchByName('b')
    }
    render() { 
        return ( 
            <div>测试route参数a:{this.a}, b:{this.b}</div>
        )
    }
}
 
export default RouteConfig