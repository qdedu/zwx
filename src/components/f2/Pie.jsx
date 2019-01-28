import React, {Component} from 'react'
import PropTypes from 'prop-types'
import F2 from '@antv/f2';
import './less/Pie.less'

const data = [
    {  amount: 16, ratio: 1, memo: '学习', namekey: 'namekey' },
    {  amount: 16, ratio: 5, memo: '睡觉', namekey: 'namekey' },
];
export default class Pie extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const chart = new F2.Chart({
            id: 'mountNode',
            pixelRatio: window.devicePixelRatio
        });

        function getEndPoint(center, angle, r) {
            return {
                x: center.x + r * Math.cos(angle),
                y: center.y + r * Math.sin(angle)
            };
        }
        function getPointAngle(center, point) {
            return Math.atan2(point.y - center.y, point.x - center.x);
        }








        chart.source(data);
        chart.coord('polar', {
            transposed: true,
            innerRadius: 0.5,
            radius: 2
        });
        chart.axis(false);
        chart.legend(false);
        chart.tooltip(false);
        chart
            .interval()
            .position('namekey*ratio')
            .color('memo')
            .adjust('stack');
        chart.render();
    }

    componentWillUnmount() {
        this.getEndPoint()
        this.getPointAngle()
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }


    handleClick = () => e => {

    }

    /*计算属性*/

    render() {
        return (
            <div className="">
                <canvas id="mountNode"></canvas>
            </div>
        );
    }
}
