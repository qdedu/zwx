import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './less/SwitchDate.less'

export default class SwitchDate extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state ={
            dateList:[
                {
                    id:1,
                    name:'2017年11月'
                },
                {
                    id:2,
                    name:'2017年12月'
                },
                {
                    id:3,
                    name:'2018年1月'
                },
                {
                    id:4,
                    name:'2018年2月'
                },
            ],
            box:0
        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }


    handleClick (index) {
        this.setState({box:index})
    }



    /*计算属性*/

    render() {
        const setDateList = this.state.dateList.map((item)=>{
            return (
                <span
                    key={item.id}
                >
                    {item.name}
                </span>
            )
        })
        return (
            <div className="switch-date-child">
                    {setDateList}
            </div>
        );
    }
}
