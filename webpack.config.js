//node内置核心模块，用来设置路径。
const { resolve } = require('path');
// 插件都需要手动引入
const HtmlWebpackPlugin = require('html-webpack-plugin');
//1. 引入插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
//引入vue loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')


//只能使用 CommonJS 规范暴露
module.exports = {
  // 入口文件配置
  entry: './src/main.js',   			
  // 输出配置
  output: {         
    // 输出文件名
    filename: 'built.js',    
    //输出文件路径配置
    path: resolve(__dirname, 'dist'),  
    //1. 添加 devServer 服务后需要调整输出的路径
    publicPath: '/' 
  },
  // development 与 production 开发环境(二选一)
  mode: 'development'   ,
  devtool:  'cheap-module-eval-source-map', //设置 devtool 策略
  
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/public/index.html', // 设置要编译的 HTML 源文件路径
    }),
     //2. 配置插件
     new CleanWebpackPlugin() ,

    //  配置vue loader 插件
    new VueLoaderPlugin(),
  ],

  //loader配置
  module:{
    rules:[
      //解析css
        {
            test:/\.css$/,  		// 检查文件是否以.less结尾（检查是否是less文件）
            use:[					// 数组中loader执行是从下到上，从右到左顺序执行
             
              'vue-style-loader', 	// 创建style标签，添加上js中的css代码
                'css-loader', 		// 将css以commonjs方式整合到js文件中
                
            ]
        },

        //es6转换es5
        {
          test: /\.js$/,                  //只检测js文件
          exclude: /node_modules/,        //排除node_modules文件夹
          enforce: "pre",                 //提前加载使用
          use: {                          
              loader: "eslint-loader"		//使用eslint-loader解析
          }
        },

        //图片url路径
        {
          test: /\.(png|jpg|gif)$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 8192,               		// 8kb以下的图片会 base64 处理
                  outputPath: 'imgs',           // 文件本地输出路径
                  // publicPath: './dist/imgs',   // 图片的url路径,相对于打包的js路径
                  name: '[hash:8].[ext]',         // 修改文件名称和后缀 
              }
          }
        },

        // vue loader配置
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }

        


    ]
  },

   //3. 增加 devServer 配置
   devServer: {
    open: true, 	// 自动打开浏览器
    compress: true, // 启动gzip压缩
    port: 3000, 	// 端口号
  },
};