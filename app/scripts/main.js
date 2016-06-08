
require.config({
    'baseUrl':'http://static.nubia.cn/index/script/',
    'paths':{
        'jquery':'jquery',
        'maint':'nubia.main'
    }
});

define(["jquery","maint"],function($,maint){
	$(".btn-success").on("click",function(){
		$(this).html("onetwo!");
	})
});