import React from "react"
import F2 from '@antv/f2';
import "./less/line.less"
const data = [
    { time: '2016-08-08 00:00:00', value: 10 ,type:'预期收益率'},
    { time: '2016-08-08 00:10:00', value: 22 ,type:'预期收益率'},
    { time: '2016-08-08 00:30:00', value: 20 ,type:'预期收益率'},
    { time: '2016-08-09 00:35:00', value: 26 ,type:'预期收益率'},
    { time: '2016-08-09 01:00:00', value: 20 ,type:'预期收益率'},
    { time: '2016-08-09 01:20:00', value: 26 ,type:'预期收益率'},
    { time: '2016-08-10 01:40:00', value: 28 ,type:'预期收益率'},
    { time: '2016-08-10 02:00:00', value: 20 ,type:'预期收益率'},
    { time: '2016-08-10 02:20:00', value: 28 ,type:'预期收益率'},
    { time: '2016-08-08 00:00:00', value: 20 ,type:'实际收益率'},
    { time: '2016-08-08 00:10:00', value: 32 ,type:'实际收益率'},
    { time: '2016-08-08 00:30:00', value: 10 ,type:'实际收益率'},
    { time: '2016-08-09 00:35:00', value: 16 ,type:'实际收益率'},
    { time: '2016-08-09 01:00:00', value: 30 ,type:'实际收益率'},
    { time: '2016-08-09 01:20:00', value: 16 ,type:'实际收益率'},
    { time: '2016-08-10 01:40:00', value: 38 ,type:'实际收益率'},
    { time: '2016-08-10 02:00:00', value: 20 ,type:'实际收益率'},
    { time: '2016-08-10 02:20:00', value: 28 ,type:'实际收益率'},

];
class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const chart = new F2.Chart({
            id: 'line-statistics',
            plugins:' Legend',
            pixelRatio: window.devicePixelRatio
        });
       // const typeColor =color('type')
        const defs = {
            time: {
                type: 'timeCat',
                mask: 'MM:DD',
                tickCount: 3,
                range: [ 0, 1 ]
            },
            value: {
                tickCount: 3,
                min: 0
            }
        };
        chart.source(data, defs);
        chart.line().position('time*value').color('type');
        chart.render();
    }
    render() {
        return (
            <div className="chart">
                <canvas id="line-statistics"></canvas>
            </div>
        )
    }
}

export default Column;