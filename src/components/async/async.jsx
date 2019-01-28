import React, { Component } from "react";
import Loading from '../loading/loading'
/**
 * 结合生命周期等待动态加载的组件渲染结束后返回
 */
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <Loading />;
    }
  }

  return AsyncComponent;
}