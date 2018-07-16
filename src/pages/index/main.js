import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        'navigationBarTitleText': 'Mitoo-weapp & Mpvue',
        'usingComponents': {
            'mit-panel': '/components/Panel/index',
            'mit-cell-group': '/components/CellGroup/index',
            'mit-cell': '/components/Cell/index'
        }
    }
}
