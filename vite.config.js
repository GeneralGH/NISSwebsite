import { createVuePlugin } from "vite-plugin-vue2";
import { createSvgPlugin } from 'vite-plugin-vue2-svg';
import px2rem from 'postcss-px2rem';

const postcss = px2rem({
    remUnit: 20
});

export default {
    base: './', // 添加publicPath配置
    css: {
        postcss: {
            plugins: [postcss],
            from: undefined
        },
    },
    resolve: {
        alias: {
            '@': '/src' // 修改alias路径
        }
    },
    plugins: [createVuePlugin(), createSvgPlugin()]
};
