var templateCacheApp	=	angular.module('templateCacheApp',[]);
templateCacheApp.run(function($templateCache){
	$templateCache.put('hello.html',"<div>12121</div>")
});
templateCacheApp.directive('hello',function($templateCache){
	return{
		restrict:'ACME',
		template:$templateCache.get('hello.html'),
		replace:true
	}
})