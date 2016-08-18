var app = angular.module('myApp', ['chart.js']);

app.controller('maincontroller',function($http,$scope){

	$scope.getClimateData = function(){
		var url='http://api.openweathermap.org/data/2.5/forecast/weather?q='+$scope.cityname+'&APPID=021eabbed12b2b71a75179cd952feb71';
	
		$http.get(url).success(function(obj){
			console.log(obj);
		}).error(function(err){
			console.log("some error"+err)
		})

	}
})