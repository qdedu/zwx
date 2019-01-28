import React, {Component} from 'react'
import propTypes from 'prop-types'
import { ImagePicker } from 'antd-mobile'
import { createForm } from 'rc-form'
import './less/assign.less'

class UploadPicture extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }

    static getDerivedStateFromProps(nextProps){

    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    selectReceiver = (param,e) => {

        e.preventDefault();
        console.log(param)
       
    }

    /*计算属性*/

    render() {

        let { onChange,onImageClick,onAddImageClick,files } = this.props.rules
       // console.log("picfiles",files)
        return (
            <div className="upload-picture">
                <ImagePicker
                    files={files}
                    onChange={onChange}
                    onImageClick={(index, fs) => onImageClick(index,fs)}
                    selectable={files.length < 5}
                    onAddImageClick={onAddImageClick}
                />
            </div>
        )
    }
}
export default UploadPicture