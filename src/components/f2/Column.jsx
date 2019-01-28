import React from "react"
import F2 from '@antv/f2';
import "./less/line.less"
const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },

];
class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const chart = new F2.Chart({
            id: 'column',
            width: 500,
            height: 300,
        });

        chart.source(data);
        chart.interval().position('genre*sold').color('genre');
        chart.render();
    }
    render() {
        return (
            <div className="chart">
                <canvas id="column"></canvas>
            </div>
        )
    }
}

export default Column;