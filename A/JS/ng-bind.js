var userInofoModule=angular.module('UserInfoModule',[])
userInofoModule.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:"2555@qq.com",
		password:"2555",
		autoLogin:true
	};
	$scope.getFormData=function(){
		console.log($scope.userInfo)
	}
		$scope.setFormData=function(){
		$scope.userInfo={
			email:"1111@qq.com",
		password:"1111",
		autoLogin:false
		}
	}
		$scope.resetForm=function(){
					$scope.userInfo={
				email:"",
		password:"",
		autoLogin:true
		}
			}
		
		
}])

