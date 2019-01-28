import React, {Component} from 'react'
import Tloader from 'react-touch-loader'
import homeworkApi from 'api/homework/HomeWork'
import { SwipeAction, List } from 'antd-mobile'

let page = 1
export default class RefreshLoading extends React.Component {
  constructor() {
    super();
    this.state = {
      listLen: 0,
      hasMore: 0,
      list:[]
    }
  }

  // 加载更多
  loadMore(resolve) {
    this.getMoreList(page++)
  }

  componentDidMount() {
    this.refresh()
  }

  refresh = async (resolve) => {
    // 清除刷新state
    page = 1
    let res = await homeworkApi.getHomeWorkList({
      userId: '82694003714686976',
      subjectId: 0,
      classId: 0,
      pageSize: 10,
      currentPage:1
    }) 
    this.setState({
      listLen: res.list.length,
      hasMore: 1,
      list: res && res.list
    })
    resolve && resolve()
  }

  loadMore = async (resolve,page=2) => {
    let res = await homeworkApi.getHomeWorkList({
      userId: '82694003714686976',
      subjectId: 0,
      classId: 0,
      pageSize: 10,
      currentPage:page
    })
    var l = this.state.listLen + res.list.length
    this.setState((prevState)=>{
      let hasMore
      if(!res.list.length){
        hasMore = false
      }else{
        hasMore = true
      }
      let list = prevState['list'].concat(res.list)
      return {
        listLen: l,
        hasMore: hasMore,
        list,
      }
    })
    resolve()
  }

  delete = async (id) => {
    await homeworkApi.deleteAssignmentSheet(id)
  }

  render() {
    var { listLen, hasMore, refreshedAt, list} = this.state
    var { refresh, loadMore } = this
    var tempList = []
    let that = this
    if (listLen) {
      for (var i = 0; i < list.length; i++) {
        tempList.push(
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: '取消',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: '删除',
                  onPress: () => console.log('delete'),
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
            >
              <List.Item
                onClick={e => console.log(e)}
              >
                <p>{list[i].name}</p>
              </List.Item>
            </SwipeAction>
        )
      }
    }
    return (
      <div className="view">
        <Tloader className="main"
          onRefresh={(resolve) => this.refresh(resolve)}
          onLoadMore={(resolve) => this.loadMore(resolve,page++)}
          hasMore={hasMore}
        >
          {tempList}
        </Tloader>
      </div>
    )
  }
}