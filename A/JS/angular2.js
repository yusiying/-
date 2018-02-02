var app	=	angular.module('myApp',[]);
app.controller('myControl',function ($scope) {
	$scope.count = 0;

})
app.controller('EventController',function ($scope) {
	$scope.count = 0;
	$scope.$on('MyEvent', function() {
		$scope.count++;
	});
})