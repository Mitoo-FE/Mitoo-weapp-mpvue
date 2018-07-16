<template>
	<div class="">
        <mit-panel noBorder noBackground title="span 24" mit-class="fonts">
    		<mit-row mit-class="row">
    			<mit-col mit-class="col" span="24">
    				<view class="grid-content">span 24</view>
    			</mit-col>
    		</mit-row>
    	</mit-panel>
    	<mit-panel noBorder noBackground title="span 12" mit-class="fonts">
    		<mit-row mit-class="row">
    			<mit-col mit-class="col" span="12">
    				<view class="grid-content bg-grey">span 12</view>
    			</mit-col>
    			<mit-col mit-class="col" span="12">
    				<view class="grid-content bg-grey-light">span 12</view>
    			</mit-col>
    		</mit-row>
    	</mit-panel>
    	<mit-panel noBorder noBackground title="span 8" mit-class="fonts">
    		<mit-row mit-class="row">
    			<mit-col mit-class="col" span="8">
    				<view class="grid-content bg-grey">span 8</view>
    			</mit-col>
    			<mit-col mit-class="col" span="8">
    				<view class="grid-content bg-grey-light">span 8</view>
    			</mit-col>
    			<mit-col mit-class="col" span="8">
    				<view class="grid-content bg-grey-dark">span 8</view>
    			</mit-col>
    		</mit-row>
    	</mit-panel>

    	<mit-panel noBorder noBackground title="span 6 offset 6" mit-class="fonts">
    		<mit-row mit-class="row">
    			<mit-col mit-class="col" span="6">
    				<view class="grid-content bg-grey">span 6</view>
    			</mit-col>
    			<mit-col mit-class="col" span="6" offset="6">
    				<view class="grid-content bg-grey">span 6 offset 6</view>
    			</mit-col>
    		</mit-row>
    	</mit-panel>
    	<mit-panel noBorder noBackground title="span 6 offset 6" mit-class="fonts">
    		<mit-row mit-class="row">
    			<mit-col mit-class="col" span="6" offset="6">
    				<view class="grid-content bg-grey">span 6 offset 6</view>
    			</mit-col>
    			<mit-col mit-class="col" span="6" offset="6">
    				<view class="grid-content bg-grey">span 6 offset 6</view>
    			</mit-col>
    		</mit-row>
    	</mit-panel>
    	<mit-panel noBorder noBackground title="gutter 20" mit-class="fonts">
    		<mit-row mit-class="row" gutter="20">
    			<mit-col mit-class="col" span="8">
    				<view class="grid-content bg-grey">span 8</view>
    			</mit-col>
    			<mit-col mit-class="col" span="8">
    				<view class="grid-content bg-grey">span 8</view>
    			</mit-col>
    			<mit-col mit-class="col" span="8">
    				<view class="grid-content bg-grey">span 8</view>
    			</mit-col>
    		</mit-row>
    	</mit-panel>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.row{
	margin-bottom: 20px;
}
.row:last-child {
	margin-bottom: 10px;
}
.mit-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 30px;
	background-color: #ebebef;
	color: #bbb;
	text-align: center;
	height: 30px;
	line-height: 30px;
	font-size: 12px;
}
.bg-grey {
    background: #ebebef;
  }
.bg-grey-dark {
    background: #ddd;
}
.bg-grey-light{
	background: #f2f2f2;
}
.fonts{
	color: #a5a5a5;
}
</style>
