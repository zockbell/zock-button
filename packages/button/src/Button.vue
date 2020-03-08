/** 
两种全局注册组件的方法
Vue.component()
Vue.use()   // 前提是组件里边必须有一个install方法

*/

<template>
    <button class="zock-button" 
        :class="[
            `zock-button--${type}`,
            {
                'is-circle': circle,
                'is-plain': plain,
                'is-round': round,
                'is-disabled': disabled,
            }
        ]"
        @click="handleClick"
    >
        <i class="iconfont" :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'ZockButton',
    props: {
        type: {
            type: String,
            defalut: 'default'
        },
        icon: {
            type: String,
            defalut: ''
        },
        circle: {
            type: Boolean,
            defalut: false
        },
        plain: {
            type: Boolean,
            defalut: false
        },
        round: {
            type: Boolean,
            defalut: false
        },
        disabled: {
            type: Boolean,
            defalut: false
        }
    },
    created() {
        // console.log(this.type);
        // 获取所有的插槽
        // console.log(this.$slots);
    },
    methods: {
        handleClick(e) {
            // 向父组件派发一个click事件，e表示参数
            this.$emit('click', e);
        }
    }
}
</script>

<style lang="scss">
.zock-button {
	display: inline-block;
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: none;
	margin: 0;
	transition: .1s;
	font-weight: 500;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	padding: 12px 20px;
	font-size: 14px;
	border-radius: 4px
}
.zock-button+.zock-button {
	margin-left: 10px
}

.zock-button.is-round {
	padding: 12px 20px
}

.zock-button:focus,.zock-button:hover {
	color: #409eff;
	border-color: #c6e2ff;
	background-color: #ecf5ff
}

.zock-button:active {
	color: #3a8ee6;
	border-color: #3a8ee6;
	outline: none
}

.zock-button::-moz-focus-inner {
	border: 0
}

.zock-button [class*=el-icon-]+span {
	margin-left: 5px
}

.zock-button.is-plain:focus,.zock-button.is-plain:hover {
	background: #fff;
	border-color: #409eff;
	color: #409eff
}

.zock-button.is-plain:active {
	background: #fff;
	outline: none
}

.zock-button.is-active,.zock-button.is-plain:active {
	border-color: #3a8ee6;
	color: #3a8ee6
}

.zock-button.is-disabled,.zock-button.is-disabled:focus,.zock-button.is-disabled:hover {
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5
}

.zock-button.is-disabled.zock-button--text {
	background-color: transparent
}

.zock-button.is-disabled.is-plain,.zock-button.is-disabled.is-plain:focus,.zock-button.is-disabled.is-plain:hover {
	background-color: #fff;
	border-color: #ebeef5;
	color: #c0c4cc
}

.zock-button.is-loading {
	position: relative;
	pointer-events: none
}

.zock-button.is-loading:before {
	pointer-events: none;
	content: "";
	position: absolute;
	left: -1px;
	top: -1px;
	right: -1px;
	bottom: -1px;
	border-radius: inherit;
	background-color: hsla(0,0%,100%,.35)
}

.zock-button.is-round {
	border-radius: 20px;
	padding: 12px 23px
}

.zock-button.is-circle {
	border-radius: 50%;
	padding: 12px
}

.zock-button--primary {
	color: #fff;
	background-color: #409eff;
	border-color: #409eff
}

.zock-button--primary:focus,.zock-button--primary:hover {
	background: #66b1ff;
	border-color: #66b1ff;
	color: #fff
}

.zock-button--primary:active {
	outline: none
}

.zock-button--primary.is-active,.zock-button--primary:active {
	background: #3a8ee6;
	border-color: #3a8ee6;
	color: #fff
}

.zock-button--primary.is-disabled,.zock-button--primary.is-disabled:active,.zock-button--primary.is-disabled:focus,.zock-button--primary.is-disabled:hover {
	color: #fff;
	background-color: #a0cfff;
	border-color: #a0cfff
}

.zock-button--primary.is-plain {
	color: #409eff;
	background: #ecf5ff;
	border-color: #b3d8ff
}

.zock-button--primary.is-plain:focus,.zock-button--primary.is-plain:hover {
	background: #409eff;
	border-color: #409eff;
	color: #fff
}

.zock-button--primary.is-plain:active {
	background: #3a8ee6;
	border-color: #3a8ee6;
	color: #fff;
	outline: none
}

.zock-button--primary.is-plain.is-disabled,.zock-button--primary.is-plain.is-disabled:active,.zock-button--primary.is-plain.is-disabled:focus,.zock-button--primary.is-plain.is-disabled:hover {
	color: #8cc5ff;
	background-color: #ecf5ff;
	border-color: #d9ecff
}

.zock-button--success {
	color: #fff;
	background-color: #67c23a;
	border-color: #67c23a
}

.zock-button--success:focus,.zock-button--success:hover {
	background: #85ce61;
	border-color: #85ce61;
	color: #fff
}

.zock-button--success:active {
	outline: none
}

.zock-button--success.is-active,.zock-button--success:active {
	background: #5daf34;
	border-color: #5daf34;
	color: #fff
}

.zock-button--success.is-disabled,.zock-button--success.is-disabled:active,.zock-button--success.is-disabled:focus,.zock-button--success.is-disabled:hover {
	color: #fff;
	background-color: #b3e19d;
	border-color: #b3e19d
}

.zock-button--success.is-plain {
	color: #67c23a;
	background: #f0f9eb;
	border-color: #c2e7b0
}

.zock-button--success.is-plain:focus,.zock-button--success.is-plain:hover {
	background: #67c23a;
	border-color: #67c23a;
	color: #fff
}

.zock-button--success.is-plain:active {
	background: #5daf34;
	border-color: #5daf34;
	color: #fff;
	outline: none
}

.zock-button--success.is-plain.is-disabled,.zock-button--success.is-plain.is-disabled:active,.zock-button--success.is-plain.is-disabled:focus,.zock-button--success.is-plain.is-disabled:hover {
	color: #a4da89;
	background-color: #f0f9eb;
	border-color: #e1f3d8
}

.zock-button--warning {
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c
}

.zock-button--warning:focus,.zock-button--warning:hover {
	background: #ebb563;
	border-color: #ebb563;
	color: #fff
}

.zock-button--warning:active {
	outline: none
}

.zock-button--warning.is-active,.zock-button--warning:active {
	background: #cf9236;
	border-color: #cf9236;
	color: #fff
}

.zock-button--warning.is-disabled,.zock-button--warning.is-disabled:active,.zock-button--warning.is-disabled:focus,.zock-button--warning.is-disabled:hover {
	color: #fff;
	background-color: #f3d19e;
	border-color: #f3d19e
}

.zock-button--warning.is-plain {
	color: #e6a23c;
	background: #fdf6ec;
	border-color: #f5dab1
}

.zock-button--warning.is-plain:focus,.zock-button--warning.is-plain:hover {
	background: #e6a23c;
	border-color: #e6a23c;
	color: #fff
}

.zock-button--warning.is-plain:active {
	background: #cf9236;
	border-color: #cf9236;
	color: #fff;
	outline: none
}

.zock-button--warning.is-plain.is-disabled,.zock-button--warning.is-plain.is-disabled:active,.zock-button--warning.is-plain.is-disabled:focus,.zock-button--warning.is-plain.is-disabled:hover {
	color: #f0c78a;
	background-color: #fdf6ec;
	border-color: #faecd8
}

.zock-button--danger {
	color: #fff;
	background-color: #f56c6c;
	border-color: #f56c6c
}

.zock-button--danger:focus,.zock-button--danger:hover {
	background: #f78989;
	border-color: #f78989;
	color: #fff
}

.zock-button--danger:active {
	outline: none
}

.zock-button--danger.is-active,.zock-button--danger:active {
	background: #dd6161;
	border-color: #dd6161;
	color: #fff
}

.zock-button--danger.is-disabled,.zock-button--danger.is-disabled:active,.zock-button--danger.is-disabled:focus,.zock-button--danger.is-disabled:hover {
	color: #fff;
	background-color: #fab6b6;
	border-color: #fab6b6
}

.zock-button--danger.is-plain {
	color: #f56c6c;
	background: #fef0f0;
	border-color: #fbc4c4
}

.zock-button--danger.is-plain:focus,.zock-button--danger.is-plain:hover {
	background: #f56c6c;
	border-color: #f56c6c;
	color: #fff
}

.zock-button--danger.is-plain:active {
	background: #dd6161;
	border-color: #dd6161;
	color: #fff;
	outline: none
}

.zock-button--danger.is-plain.is-disabled,.zock-button--danger.is-plain.is-disabled:active,.zock-button--danger.is-plain.is-disabled:focus,.zock-button--danger.is-plain.is-disabled:hover {
	color: #f9a7a7;
	background-color: #fef0f0;
	border-color: #fde2e2
}

.zock-button--info {
	color: #fff;
	background-color: #909399;
	border-color: #909399
}

.zock-button--info:focus,.zock-button--info:hover {
	background: #a6a9ad;
	border-color: #a6a9ad;
	color: #fff
}

.zock-button--info:active {
	outline: none
}

.zock-button--info.is-active,.zock-button--info:active {
	background: #82848a;
	border-color: #82848a;
	color: #fff
}

.zock-button--info.is-disabled,.zock-button--info.is-disabled:active,.zock-button--info.is-disabled:focus,.zock-button--info.is-disabled:hover {
	color: #fff;
	background-color: #c8c9cc;
	border-color: #c8c9cc
}

.zock-button--info.is-plain {
	color: #909399;
	background: #f4f4f5;
	border-color: #d3d4d6
}

.zock-button--info.is-plain:focus,.zock-button--info.is-plain:hover {
	background: #909399;
	border-color: #909399;
	color: #fff
}

.zock-button--info.is-plain:active {
	background: #82848a;
	border-color: #82848a;
	color: #fff;
	outline: none
}

.zock-button--info.is-plain.is-disabled,.zock-button--info.is-plain.is-disabled:active,.zock-button--info.is-plain.is-disabled:focus,.zock-button--info.is-plain.is-disabled:hover {
	color: #bcbec2;
	background-color: #f4f4f5;
	border-color: #e9e9eb
}

.button-icon {
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
}
</style>