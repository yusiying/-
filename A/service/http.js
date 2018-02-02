var serviceApp	=	angular.module('serviceApp',[]);
serviceApp.factory('userLis',['$http',
function($http){
	var dore	=	function(userneme,path){
		return $http({
			method:'GET',
			url:'users.jon'
		})
	}
	return{
		userList:function(username){
			return dore(username,'userList');
		}
	}
	//自定义的service
	
}])
serviceApp.controller('serviceCtrl',['$scope','$timeout','userLis',
function($scope,$timeout,userLis){
	var timeout;
	$scope.$watch('username',function(newUserName){
		if(newUserName){
			if(timeout){
				$timeout.cancel(timeout);
			}
		timeout	=	$timeout(function(){
			dore.userList(newUserName).then(function(data,status){
				$scope.users	=	data;
			})
		},350)
		}
	})
}])
