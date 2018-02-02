var ScApp = angular.module('ScApp',[]);
ScApp.controller('SCCtrl',['$scope',function($scope){
	$scope.ctrlF	=	"白"
}])
ScApp.directive("wo",function(){
	return{
		restrict:'AMEC',
		scope:{
			model:'='//@
		},
		template:"{{flavor}}"
	}
})


ScApp.controller("gRCtrl",['$scope',
function($scope){
	$scope.say	=	function(name){
		alert("h"+name);
	}
}])
ScApp.directive("greeting",function(){
	return{
		restrict:'ACEM',
		scope:{
			greet:"&"
		},
		template:'<input type="text" ng-model="username" /><br/>'+
		'<button ng-click="greet({name:username})">GR</button>'
		
	}
})