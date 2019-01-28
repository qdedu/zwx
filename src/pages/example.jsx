import React from "react"
import { Link } from "react-router-dom"
import { Tabs, WhiteSpace, ListView } from 'antd-mobile';
import LazyImage from '../components/lazy/lazyimage'
const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' }
];
const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

const A = () => (<div>123</div>)



class ListDemo extends React.Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: true,
        };      
    }

    componentDidMount() {
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                        lineHeight: '50px',
                        color: '#888',
                        fontSize: 18,
                        borderBottom: '1px solid #F6F6F6',
                        }}
                    >{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                        <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.image = {
            width: '100px',
            height: '100px',
            alt:'测试懒加载图片',
            src:'image/log.svg',
        }
        this.testRoute = this.testRoute.bind(this)
    }
    testRoute(){
        this.props.history.push({
            pathname:'/route-config',
            query:{
                a: 1,
                b: 2
            },
            search:'?a=1&b=2',
        })
    }
    render() { 
        return ( 
            <div>
                <i class="iconfont man-copyuuu">&#xe6f2;</i>
				<WhiteSpace></WhiteSpace>
				<Link to="/filter">过滤器demo</Link>
				<WhiteSpace></WhiteSpace>
				<Link to="/directive">指令demo</Link>
				<WhiteSpace></WhiteSpace>
                <Link to="/column">图表demo</Link>
                <WhiteSpace></WhiteSpace>
                <Link to="/lazyImage">图片懒加载</Link>
                <WhiteSpace></WhiteSpace>
                <div onClick={this.testRoute}>测试route</div>
                <WhiteSpace></WhiteSpace>
                <Link to="/api-proxy">接口代理</Link>
                <WhiteSpace></WhiteSpace>
                <Link to="/cell">左滑删除demo</Link>
                <A />
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace></WhiteSpace>
                <ListDemo/>
				<WhiteSpace></WhiteSpace>
            </div>
        )
    }
}
export default Main;
