import React from 'react';
import {observer,inject} from 'mobx-react';

@inject("store")
@observer
class ParentComp extends React.Component {
    
    render(){
		console.log(this.props.store)
        return (
            <div className='list-left'>
                展示mobx中的值: {this.props.store.common.subjectList[0] && this.props.store.common.subjectList[0].subjectName}
            </div>
        )
    }
}

export default ParentComp
