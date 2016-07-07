angular.module('transcludeExample', [])
.controller('ExampleController', ['$scope', function($scope) {

  }])
.directive('repeat', function(){
    return {
        restrict: 'A',
        transclude: true,
        scope : false,
  
        link: function  ($scope, $Element, $Attrs, $Controller, $transcludeFn) {

            $scope.$watch('repetition',function (newVal, oldVal, scope) {
                $Element.empty(); 
                  for (var i = 0; i < $Attrs.repeat; i++) {
                        $transcludeFn(function(arg) {
                          $Element.append(arg);
                        })                  
                  }
            })
        }
    }
});

