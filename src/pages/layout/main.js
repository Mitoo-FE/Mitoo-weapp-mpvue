import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        'navigationBarTitleText': 'Mitoo-weapp & Mpvue',
        'usingComponents': {
            'mit-row': '/components/Row/index',
            'mit-col': '/components/Col/index',
            'mit-panel': '/components/Panel/index'
        }
    }
}
