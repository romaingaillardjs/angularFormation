var app = angular.module('monModule',['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
			.when('/',{
				templateUrl: 'partials/home.html',
				controller: 'PostsCtrl'
			})
			.when('/comments/:id',{
				templateUrl: 'partials/comments.html',
				controller: 'CommentsCtrl'
			})
			.otherwise({redirectTo : '/'
		})		  
}])



