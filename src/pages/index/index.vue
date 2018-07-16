<template>
    <div class='index'>
		<view class="logo-wrap">
	        <image class="logo" src="/static/logo.png"/>
	        <view class="main-view">Mitoo-weapp</view>
	    </view>
		<mit-panel title='布局'>
	        <mit-cell-group>
	            <mit-cell title='Layout 布局' isLink url='/pages/layout/main'/>
	            <mit-cell title='Grid 宫格' isLink url='/pages/grid/main'/>
	            <mit-cell title='Card 卡片' isLink url='/pages/card/main'/>
	            <mit-cell title='List 列表' isLink url='/pages/list/main'/>
	            <mit-cell title='Panel 面板' isLink url='/pages/panel/main'/>
	            <mit-cell title='Accordion 手风琴' isLink url='/pages/accordion/main'/>
	        </mit-cell-group>
	    </mit-panel>
	    <mit-panel title='导航'>
	        <mit-cell-group>
	            <mit-cell title='Tabs 标签' isLink url='/pages/tabs/main'/>
	            <mit-cell title='Drawer 抽屉' isLink url='/pages/drawer/main'/>
	            <mit-cell title='NoticeBar 通知条' isLink url='/pages/noticeBar/main'/>
	        </mit-cell-group>
	    </mit-panel>
	    <mit-panel title='基础组件'>
	        <mit-cell-group>
	            <mit-cell title='Color 颜色' isLink url='/pages/color/main'/>
	            <mit-cell title='Button 按钮' isLink url='/pages/button/main'/>
	            <mit-cell title='Icon 图标' isLink url='/pages/icon/main'/>
	        </mit-cell-group>
	    </mit-panel>
	    <mit-panel title='操作反馈'>
	        <mit-cell-group>
	            <mit-cell title='ActionSheet 动作面板' isLink url='/pages/actionSheet/main'/>
	            <mit-cell title='Toast 轻提示' isLink url='/pages/toast/main'/>
	            <mit-cell title='Modal 对话框' isLink url='/pages/modal/main'/>
	            <mit-cell title='Toptips 顶部提示' isLink url='/pages/toptips/main'/>
	        </mit-cell-group>
	    </mit-panel>
	    <mit-panel title='表单'>
	        <mit-cell-group>
	            <mit-cell title='Input 输入框' isLink url='/pages/input/main'/>
	            <mit-cell title='Switch 开关' isLink url='/pages/switch/main'/>
	            <mit-cell title='Radio 单选' isLink url='/pages/radio/main'/>
	            <mit-cell title='Checkbox 复选' isLink url='/pages/checkbox/main'/>
	        </mit-cell-group>
	    </mit-panel>
	    <mit-panel title='视图'>
	        <mit-cell-group>
	            <mit-cell title='Badge 徽章' isLink url='/pages/badge/main'/>
	            <mit-cell title='Tag 标签' isLink url='/pages/tag/main'/>
	            <mit-cell title='Alert 警告提示' isLink url='/pages/alert/main'/>
	            <mit-cell title='Progress 进度条' isLink url='/pages/progress/main'/>
	            <mit-cell title='Avatar 头像' isLink url='/pages/avatar/main'/>
	        </mit-cell-group>
	    </mit-panel>
	    <mit-panel title='页面'>
	        <mit-ceel-group>
	            <mit-cell title='Timeline 时间线' isLink url='/pages/timeline/main'/>
	            <mit-cell title='CityPicker 城市选择器' isLink url='/pages/cityPicker/main'/>
	        </mit-ceel-group>
	    </mit-panel>
    </div>
</template>

<script>

export default {
    data () {
        return {
            motto: 'Hello World',
            userInfo: {}
        }
    }
}
</script>

<style scoped>
.main-view {
    font-size: 48rpx;
    text-align: center;
    transform: translateY(-60rpx);
}
.logo-view {
    overflow: hidden;
}
.logo {
    display: block;
    margin: 0 auto;
    width: 420rpx;
    height: 420rpx;
    margin-top: -60rpx;
}
</style>
