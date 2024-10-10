import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'virtual:svg-icons-register';
// 全局css
import '@/styles/index.scss';

// 路由
import router from './router';
// 持久战
import pinia from './store';

import App from './App.vue';
// 全局定义
import gloablComponent from './index';

// icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
// icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(pinia);
app.use(router);
app.use(gloablComponent);
app.use(ElementPlus, {
    locale: zhCn,
});

console.log(import.meta.env);

app.mount('#app');
