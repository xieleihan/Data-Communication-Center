import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxtorem from 'postcss-pxtorem'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          // 设计稿宽度 / 10，这里以设计稿宽度为375px为例
          rootValue: 37.5,
          propList: ['*'], // 需要转换的属性，这里选择转换所有属性
        }),
      ],
    },
  },
})
