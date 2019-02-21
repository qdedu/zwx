import React from "react"
import DoApi from "../utils/axios/DoApi";
import Api from "../api/api";

const isDebug = util.getSearchByName('debug') == 'true' ? true : false
const isFromBrowser = util.getDeviceType().isBrowser

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.login()
    }

    login = async () => {
        let className = "com.zhl.unify.interfaces.move_work.service.ZwxClientService";
        let method = "login";

        var contentJson = {
            "userName": "18600171714",
            "userPwd": "111111",
            "type": 1,
            "ptype": 0,
            "deviceInfo": "asfdasfdsafdsafdsadsfsafd"
        }
        let params = new DoApi.createParamJSON(className, method, contentJson)
        let result = await Api.getZhlInterfaceUnifyEntry(params)
        if (result.data && result.data.content.message == 'success') {
            sessionStorage.setItem("token", result.data.content.result.token);
            this.props.history.push(`/homePageList`)
        }


    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Main
