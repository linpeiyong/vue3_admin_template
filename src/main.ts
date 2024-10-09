import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'virtual:svg-icons-register';

import '@/styles/index.scss';

// 路由
import router from './router';
// 持久战
import pinia from './store';

import App from './App.vue';

import gloablComponent from './index';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(gloablComponent);
app.use(ElementPlus, {
    locale: zhCn,
});

console.log(import.meta.env);

app.mount('#app');
