app.factory('Post', function($http,$q,$timeout){
	var factory = {
		posts :false,

		getPosts : function () {
			
			var deferred = $q.defer();
			$http.get('posts.json')
			.success(function (data,status) {
				factory.posts = data;
				console.log('onch');
				$timeout(function () {
					deferred.resolve(factory.posts);
					
				}, 2000)
			})
			.error(function (data,status) {

				deferred.reject('impossible de recuperer les articles');
			});

			return deferred.promise;

		},
		getPost : function (id) {
			console.log(id)
			var post = {'name':'romain'};
			var deferred = $q.defer();
	
			var posts = factory.getPosts().then(function (arg) {
				
				angular.forEach(arg, function(value, key) {
					console.log(value.id);
			  			if (value.id == id) {
			  				post = value;
			  			}
  					});
				deferred.resolve(post);
				console.log(post);
				},function (arg) {

			deferred.reject(arg);
			console.log(arg);
		});		
			console.log(deferred.promise)
			return deferred.promise;
			
		}
	};
	return factory;
});