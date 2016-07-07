'use strict';

/* Controllers */

angular.module('myApp.controllers').
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl3',['$scope','myServices',function ($scope,myServices) {
     $scope.message = '';
          $scope.listeDeMessages = [];
          $scope.ajouterMessage = function(){
            if($scope.message){
              //ajout du message à la liste
              console.log('bonjour');
              //
              
              myServices.mapremiereFonction($scope.message).then(function(data) {
                console.log('DONNEES RECUP => ' + data.data.articles);

                $scope.listeDeMessages = angular.copy(data.data.articles);


              }, function() {
                console.log('error');
              });
              
              //réinitialisation du message
              $scope.message = '';
            };
          };
  }]);


