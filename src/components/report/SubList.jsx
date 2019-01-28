import React from "react";
import  './less/SubList.less'
const sublist = [
                    {
                    "id":1,
                    "name":"语文"
                    },
                    {
                        "id":2,
                        "name":"数学"
                    },
                    {
                        "id":3,
                        "name":"英语"
                    },
                    {
                        "id":4,
                        "name":"英语"
                    },
                    {
                        "id":5,
                        "name":"英语"
                    }
                ]


class SubList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box:0
        }
    }

    handleClick (index) {
        this.setState({box:index})
    }

    render() {
        const listItems = [...sublist].map((sub,index) =>
            <span
                key={sub.id}
                box ={this.state.box}
                className={index == this.state.box?"crt":''}
                onClick={this.handleClick.bind(this,index)}>
                {sub.name}
            </span>
        );
        return(
        <div className="sub-list">
            <div className="subject">
                {listItems}
            </div>
        </div>
        )
    }
}
 
export default SubList;