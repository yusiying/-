var filterApp 	=	angular.module('filterApp',[]);
filterApp.filter('filter1',function(){
	return function(item){
		return item +121212
	}
})