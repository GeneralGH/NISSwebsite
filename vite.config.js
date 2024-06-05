import { createVuePlugin } from "vite-plugin-vue2";
import { createSvgPlugin } from 'vite-plugin-vue2-svg';
import px2rem from 'postcss-px2rem';

/* const postcss = pxtorem({
    rootValue: 16,  // The root element font size.
    unitPrecision: 5,  // The decimal numbers to allow the REM units to grow to.
    propList: ['*'],  // Properties that can change from px to rem.
    selectorBlackList: [],  // Selectors to ignore and leave as px.
    replace: true,  // Replaces the unit with rem.
    mediaQuery: false,  // Allow px to be converted in media queries.
    minPixelValue: 0  // Set the minimum pixel value to replace.
}); */


const postcss = px2rem({
    remUnit: 18  //基准大小 baseSize，需要和rem.js中相同
})

export default {
    css: {
      postcss: {
        plugins: [postcss],
        from: undefined
      },
    },
    resolve: {
      alias: {
        '@': './src'
      }
    },
    plugins: [createVuePlugin(), createSvgPlugin()]
  };
