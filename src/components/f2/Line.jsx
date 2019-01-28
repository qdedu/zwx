import React from "react"
import F2 from '@antv/f2';
import "./less/line.less"
const data = [
    { time: '2016-08-08 00:00:00', tem: 10 },
    { time: '2016-08-08 00:10:00', tem: 22 },
    { time: '2016-08-08 00:30:00', tem: 20 },
    { time: '2016-08-09 00:35:00', tem: 26 },
    { time: '2016-08-09 01:00:00', tem: 20 },
    { time: '2016-08-09 01:20:00', tem: 26 },
    { time: '2016-08-10 01:40:00', tem: 28 },
    { time: '2016-08-10 02:00:00', tem: 20 },
    { time: '2016-08-10 02:20:00', tem: 28 }
];
class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const chart = new F2.Chart({
            id: 'line-statistics',
            pixelRatio: window.devicePixelRatio
        });

        const defs = {
            time: {
                type: 'timeCat',
                mask: 'MM/DD',
                tickCount: 3,
                range: [ 0, 1 ]
            },
            tem: {
                tickCount: 5,
                min: 0
            }
        };

        chart.axis(false);

        chart.source(data, defs);
        chart.line().position('time*tem');
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