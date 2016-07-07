angular.module('monModule',[]);

angular.module('monModule').directive('ngBlur',function () {
	return function(scope,elem,attrs){
		elem.bind('blur', function (argument) {
			scope.$apply(attrs.ngBlur)
		})
	}
})

angular.module('monModule')

.controller('TodoCtrl', ['$scope','filterFilter','$http','$location', function($scope, filterFilter,$http,$location){
	$scope.remaining = 3;
	$scope.todos = [];
	$scope.placeholder = 'chargement...';
	$scope.statusfilter={};

	$http.get('todos.php').success(function (data) {
		console.log(data);
		$scope.todos = data;
		$scope.placeholder = 'ajouter une nouvelle tache';
	})

	$scope.$watch('todos', function () {
		$scope.remaining = filterFilter($scope.todos,{completed:false}).length;
		$scope.allchecked = !$scope.remaining;

	}, true)

	if ($location.path()== '') {
		$location.path('/');
	}
	$scope.location = $location;
	$scope.$watch('location.path()',function (path) {
		$scope.statusFilter = 
		(path == '/') ? {name} :
		(path == '/active') ? {completed:false} : 
		(path == '/done') ? {completed : true} :
		null;
	})
		
		// body...

	$scope.removeTodo = function (index) {
		$scope.todos.splice(index,1)
		// body...
	}
	$scope.addTodo = function () {
		$scope.todos.push({
			name:$scope.newtodo,
			completed :false
		});
		$scope.newtodo = '';
		// body...
	}

		$scope.editTodo = function (todo) {

			console.log('hello')
		todo.editing = false;

	}

	$scope.checkAlltodo = function (allchecked) {
		$scope.todos.forEach(
			function(todo){
				todo.completed = allchecked;
			}
			)
		// body...
	}
}])


