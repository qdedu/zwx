import React from "react"
import F2 from '@antv/f2';
import "./less/line.less"
const data = [
    {name: '张飞',props: '智力', value: 65},
    {name: '张飞',props: '武力', value: 97},
    {name: '张飞',props: '政治', value: 50},
    {name: '张飞',props: '统帅', value: 92},
    {name: '张飞',props: '忠诚', value: 100},
];
class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const chart = new F2.Chart({
            id: 'radar-statistics',
            pixelRatio: window.devicePixelRatio
        });

        chart.coord('polar');

        chart.source(data, {
            value: {
                min: 0,
                tickInterval: 20
            }
        });

        chart.line().position('props*value');
        chart.render();
    }
    render() {
        return (
            <div className="chart">
                <canvas id="radar-statistics"></canvas>
            </div>
        )
    }
}

export default Column;