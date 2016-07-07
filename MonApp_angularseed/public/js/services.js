'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.service('myServices',['$http',function($http){

	this.mapremiereFonction = function (myData) {
		var machin = JSON.stringify({truc: myData});
		return $http.post('api/test', machin).

		success(function (data, status, headers, config) {
			console.log(data);
      		return data;
	    }).
	    error(function (data, status, headers, config) {
	    	console.log('Error !');
	    });
	}
}]);

