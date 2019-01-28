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

  componentDidMount() {
    this.refresh()
  }

  // 刷新列表
  refresh = async(resolve) => {
     page = 1
     util.setState(this,{
        list: []
     })
    let res = await this.props.refresh()
      util.setState(this,{
            listLen: res && res.list && res.list.length,
            hasMore: 1,
            list: res && res.list
      })
    if(res && res.page && res.page.pageCount == 1){
      $(".tloader-btn").hide()
    }
    typeof resolve === 'function' && resolve()
  }

  // 加载更多
  loadMore = async (resolve,page=2) => {
    let res = await this.props.loadMore(++page)
    this.setState((prevState)=>{
      let hasMore
      let pageCount = res.page && res.page.pageCount
      if(page == pageCount){
        hasMore = false
      }else{
        hasMore = true
      }
      let list = res.flag?[]:prevState['list'].concat(res.list)
      let len = list.length
        console.log(len)
      return {
        listLen: len,
        hasMore: hasMore,
        list,
      }
    })
    typeof resolve === 'function' && resolve()
  }

  //删除条目
  delete = async (item) => {
    console.log('delete',item)
    this.setState((prevState) => {
      let temp = prevState['list']
      let index = temp.findIndex((listItem) => listItem.objectId == item.objectId)
      temp.splice(index, 1)
      return {
        list: temp,
        listLen: temp && temp.length
      }
    })
  }

  render() {
    let { listLen, hasMore, refreshedAt, list} = this.state
    if(!!list && !!list.length){
      list = util.firstDataHandle(list)
    }
    var { refresh, loadMore } = this
    var tempList = []
    let that = this
    if (listLen) {
      for (var i = 0; i < list.length; i++) {
        tempList.push(
          that.props.renderRow({
            homework: list[i],
            key: list[i] && list[i].id,
            delete: (obj)=>{that.delete(obj)},
          })
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