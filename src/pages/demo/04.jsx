import React,{Component} from 'react';
import { PullToRefresh, ListView, Button } from 'antd-mobile';
class ListRefrshLoading extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <ListView
                key={this.state.useBodyScroll ? '0' : '1'}
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderHeader={() => <span>Pull to refresh</span>}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                useBodyScroll={this.state.useBodyScroll}
                style={this.state.useBodyScroll ? {} : {
                    height: this.state.height,
                    border: '1px solid #ddd',
                    margin: '5px 0',
                }}
                pullToRefresh={<PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />}
                onEndReached={this.onEndReached}
                pageSize={5}
            />
        )
    }
}
 
export default ListRefrshLoading;