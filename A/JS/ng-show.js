// 
//  ng-show.js
//  app名字为:showApp;
//		控制器名字为:showContrl;
//  切换列表状的显示:toggleMune()
//		控制下列值是否显示:menuState.show;
//  Created by 余思颖 on 2018-01-26.
//  Copyright 2018 余思颖. All rights reserved.
// 


var showApp =angular.module('showApp',[]);
showApp.controller('showContrl',['$scope',
function($scope){
	$scope.menuState={show:false};
	$scope.toggleMune	=	function(){
		$scope.menuState.show	=	!$scope.menuState.show;
	}
}])