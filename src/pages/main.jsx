import React from "react"

const isDebug = util.getSearchByName('debug') == 'true' ? true : false
const isFromBrowser = util.getDeviceType().isBrowser

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                助我学h5版
            </div>
        )
    }
}

export default Main
