import React from 'react'
import LazyLoad from 'react-lazy-load'
import './lazyimage.less'
export default class LazyImage extends React.Component {
    render() {
        return (
            <div className="widget-list image-container">
                Scroll to load images.
                <div className="filler" />
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
                </LazyLoad>
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvyo52qj20u01hcqeq.jpg" />
                </LazyLoad>
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww2.sinaimg.cn/mw690/62aad664jw1f2nxvz2cj6j20u01hck1o.jpg" />
                </LazyLoad>
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxvzfjv6j20u01hc496.jpg" />
                </LazyLoad>
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw0e1mlj20u01hcgvs.jpg" />
                </LazyLoad>
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww4.sinaimg.cn/mw690/62aad664jw1f2nxw0p95dj20u01hc7d8.jpg" />
                </LazyLoad>
                <LazyLoad throttle={200} height={300}>
                    <img src="http://ww3.sinaimg.cn/mw690/62aad664jw1f2nxvya0u2j20u01hc16p.jpg" />
                </LazyLoad>
            </div>
        )
    }
}