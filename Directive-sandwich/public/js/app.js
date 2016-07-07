angular.module('transcludeExample', [])
.controller('ExampleController', ['$scope', function($scope) {   
    $scope.text = 'juste une phrase';
  }])
.directive('sandwich', function(){
      return {
        restrict: 'E',
        transclude: true,
        template: '<header> le header </header>' +
                    '<ng-transclude></ng-transclude>' +
                  		'<footer> le footer </footer>'
      };
  });
