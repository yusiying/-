var CssModule	=	angular.module('CssModule',[]);
CssModule.controller('CSSCtrl',['$scope',
function($scope){
	$scope.isGreen	=	false;
	$scope.isRed	=	true;
	$scope.setGreen	=	function(){
		$scope.isGreen	=	true;
			$scope.isRed	=	false;
	}
}])