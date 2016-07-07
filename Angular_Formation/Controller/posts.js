app.controller('PostsCtrl', ['$scope','Post', function($scope,Post){
	$scope.loading = true;
	$scope.posts = Post.getPosts().then(function (posts) {
	$scope.posts = posts;
	$scope.loading = false;

	}, function (msg) {
		alert(msg);
	});
}])

