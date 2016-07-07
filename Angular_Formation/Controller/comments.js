app
.controller('CommentsCtrl', ['$scope','Post','$routeParams', function($scope,Post,$routeParams){
	var post = Post.getPost($routeParams.id);

	$scope.title = post.name;

	$scope.comments = post.comments;

	$scope.newComment = {};

	$scope.addcomments = function () {

		$scope.comments.push($scope.newComment)
	}
}]);