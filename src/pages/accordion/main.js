import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        'navigationBarTitleText': 'Mitoo-weapp & Mpvue',
        'usingComponents': {
            'mit-accordion': '/components/Accordion/index',
            'mit-accordion-panel': '/components/Accordion-Panel/index',
            'mit-panel': '/components/Panel/index'
        }
    }
}
