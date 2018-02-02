var restrictApp	=	angular.module('restrictApp',[]);
restrictApp.directive('hello',function(){
	return{
				restrict:'AEMC',
//		template:'<div>12</div>',
				templateUrl:'hello.html',
				replace:true
	}
})