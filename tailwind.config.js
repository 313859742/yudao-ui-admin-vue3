/** @type {import('tailwindcss').Config} */
module.exports = {
  // 指定项目中使用Tailwind CSS的文件路径
  content: ['./src/**/*.{html,vue,js}'],
  theme: {
    // 在这里扩展你的主题
    extend: {
      // 示例：添加自定义颜色
      colors: {
        'custom-blue': '#007bff',
      },
      // 示例：添加自定义字体大小
      fontSize: {
        'custom-size': '1.25rem', // 20px
      },
    },
  },
  // 引入任何你需要的Tailwind CSS插件
  plugins: [
    require('@tailwindcss/forms'), // 引入@tailwindcss/forms插件
  ],
}

