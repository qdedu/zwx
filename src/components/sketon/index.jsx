import React, {Component} from 'react'
import './index.less'

export default class Sketon extends React.Component {
  constructor() {
    super();
    this.state = {
        
    }
  }

  render() {
    
    return (
      <div className="sketon">
        <div className="header">
            <div className="title">
                
            </div>
            <div className="date">
                
            </div> 
        </div>
        <div className="context">
            <div className="text-line"></div>
            <div className="text-line"></div>
            <div className="text-line"></div>
            <div className="text-line"></div>
            <div className="text-line"></div>
            <div className="text-line"></div>
            <div className="text-line"></div>
            <div className="text-line"></div>
        </div>
        <div className="footer">
            <div className="title"></div>
            <div className="student">
                <div className="portrait">
                    <div className="student-image"></div>
                    <div className="student-name"></div>
                </div>
                <div className="portrait">
                    <div className="student-image"></div>
                    <div className="student-name"></div>
                </div>
                <div className="portrait">
                    <div className="student-image"></div>
                    <div className="student-name"></div>
                </div>
                <div className="portrait">
                    <div className="student-image"></div>
                    <div className="student-name"></div>
                </div>
            </div>
            
        </div>
      </div>
    )
  }
}