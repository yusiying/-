var replaceApp	=	angular.module('replaceApp',[]);
replaceApp.directive("hello",function(){
	return{
		restrict:'AECM',
transclude:true,
template:"<div src="shihs.html"><div ng-transclude></div></div>",
		replace:true
	}
})