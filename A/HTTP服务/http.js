var HttpApp	=	angular.module('HttpApp',[]);
HttpApp.controller('HttpCtrl',['$scope','$http',function($scope,$http){
	$http({
		method:'GET',
		url:'http.json'
	}).find(function(data,status,headers,config){
		console.log("success。。。");
		$scope.users=data;
	})
}])
