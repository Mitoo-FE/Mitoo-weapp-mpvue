import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        'navigationBarTitleText': 'Mitoo-weapp & Mpvue',
        'usingComponents': {
            'mit-panel': '/components/Panel/index',
            'mit-grid': '/components/Grid/index',
            'mit-grid-item': '/components/Grid-Item/index',
            'mit-icon': '/components/Icon/index',
            'mit-col': '/components/Col/index',
            'mit-row': '/components/Row/index'
        }
    }
}
