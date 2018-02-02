var DirectiveApp	=	angular.module('DirectiveApp',[]);

DirectiveApp.controller('DirectiveCtrl',['$scope',function($scope){
	$scope.loadDateW=function(){
		console.log("加载...");
	}
	
}])

DirectiveApp.controller('DirectiveCtrl2',['$scope',function($scope){
	$scope.loadDateW2=function(){
		console.log("加载...2");
	}
	
}])

DirectiveApp.directive("loader",function(){
	return{
		restrict:"AEMC",
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
//				 scope.loadData();
//scope.$apply("loadData()")
				  scope.$apply(attrs.how)
			})
		}
	}
})