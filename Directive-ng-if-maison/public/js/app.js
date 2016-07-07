angular.module('transcludeExample', [])
.controller('ExampleController', ['$scope', function($scope) {

  }])
.directive('if', function(){
    return {
        restrict: 'A',
        transclude: true,
        scope : false,
        link: function  ($scope, $Element, $Attrs, $Controller, $transcludeFn) {

            $scope.$watch('value',function (newVal, oldVal, scope) {
              if ($scope.value) {
                  $transcludeFn(function(arg) {
                      $Element.append(arg);
                  }) 

              }else{
                  $Element.empty(); 
              }                                 
                  
            })
        }
    }
});

