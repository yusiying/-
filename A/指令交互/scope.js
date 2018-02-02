var scopeApp	=	angular.module('scopeApp',[]);
scopeApp.directive('superman',function(){
	return{
		scope:{},
		retrict:'AEMC',
		controller:function($scope){
			$scope.abilities=[];
			this.addStrength	=	function(){
				$scope.abilities.push("strength");
			},
			this.addSpped	=	function(){
			$scope.abilities.push("spped");
		},
		this.addlight	=	function(){
			$scope.abilities.push("light");
		}
		},
		
		link:function(scope,element,atrrs){
			element.bind("mouseenter",function(){
				console.log(scope.abilities)
			})
		}
	}
})
scopeApp.directive('strength',function(){
	return{
		require:'^superman',
		link:function(scope,element,atrrs,supermanCtrl){
			supermanCtrl.addStrength()
		}
	}
});
scopeApp.directive('spped',function(){
	return{
		require:"^superman",
		link:function(scope,elment,attrs,supermanCtrl){
			supermanCtrl.addSpped();
		}
	}
})
scopeApp.directive('light',function(){
	return{
		require:"^superman",
		link:function(scope,elements,attrs,supermanCtrl){
			supermanCtrl.addlight();
		}
	}
})