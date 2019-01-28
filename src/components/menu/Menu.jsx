import React from 'react'
import './Menu.less'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {menu,handleMenu} = this.props
        let filterMenuStyle = {
            'filter-menu': true,
            'hide': util.getRoles().isParent
        }
        return ( 
            <div className={classnames(filterMenuStyle)}>
                {
                    menu.map((item,index)=>{
                        let down = {
                            'iconfont' :true,
                            'jiantou-down':true,
                            'hide': !item.state
                        }
                        let up = {
                            'iconfont':true,
                            'jiantou-up-copy':true,
                            'hide': item.state
                        }
                        return (
                            <span onClick={()=>handleMenu(item)} key={index}>
                                {item.name}
                                <i className={classnames(up)}>&#xe6fe;</i>
                                <i className={classnames(down)}>&#xe8f8;</i>
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}
 
export default Menu;