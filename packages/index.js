import Button from './button/index.js';
// 字体图标
import './fonts/iconfont.css';

// 把所有的组件存储起来
const components = [
    Button,
];

const install = Vue => {
    // 判断我们的组件是否安装，按需引用
    if(install.installed) return;
    install.installed = true;
    // 遍历注册所有的组件
    components.map(component => Vue.use(component));
}

// 检测到vue才去执行
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,   // 所有的组件必须有一个install方法，才能使用
    ...components   // 扩展运算符
}