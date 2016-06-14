({
    appDir: "./",  //项目根目录，给后面的baseUrl做参考;非必要项;默认为与r.js平级目录
    baseUrl: "./scripts", //模块相对目录，与后面的paths配置使用
    dir: "../rdist",  //压缩后的文件的输出目录 
    modules: [
        {
            name: "site/index/main"
        }
    ],
	fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/, //过滤文件不压缩
    optimizeCss: 'standard', //css的标准方式
    optimize: 'uglify', //设置是否压缩;uglify(压缩格式)|none(只合并不压缩)
    removeCombined: true, //设置移除压缩后的文件
	paths: {
    	jquery: 'lib/jquery/jquery',
		plugins: 'lib/plugins/plugins'
    }
})