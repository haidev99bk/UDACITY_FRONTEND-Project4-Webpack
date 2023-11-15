###Step 1:
npm run start => notice that file open does not have style => need to build

- add webpack.dev.js and webpack.prod.js

###Step 2:
(handle scss and html)

- add style loader and add htmlWebpackPlugin to generate html file

###Step 3:
(handle js)

- add babel inorder to use import syntax

###Step 4:
Handle dom event:

- change output to library to be able to get access to

###Step 5:
Handle logic and add dev tools to webpack:

- debug: devtool: "inline-source-map",
- clean: new CleanWebpackPlugin(),
- auto reload web: devServer, webpackDevServer,
- watch: --watch

###Step 6:
Add optimizations for production (keywords: optimize, minimize webpack)

- configurations: optimize

* TerserPlugin

- plugins:

* OptimizeCSSAssetsPlugin
* MiniCssExtractPlugin

##Keywords to search for and implement:

- scss webpack
- html webpack: HtmlWebpackPlugin
- js: babel loader
- dom event: output webpack
- clean: CleanWebpackPlugin()
- watch: --watch

##Tools:

- webpack-dev-server: follow steps here: https://v4.webpack.js.org/guides/development/
