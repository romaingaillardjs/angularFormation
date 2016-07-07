var myApp = angular.module('myApp', ['ngRoute'])

//ng-route config
.config(function ($routeProvider, $locationProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'default.html',
    })
    .when('/contact-info/:contact_index', {
      templateUrl: 'contact_info.html',
      controller: 'contactInfoCtrl'
    })
    .when('/add', {
      templateUrl: 'contact_form.html',
      controller: 'addContactCtrl'
    })
    .when('/edit/:contact_index', {
      templateUrl: 'contact_form.html',
      controller: 'editContactCtrl'
    })
    .otherwise({redirectTo: '/home'});
})

// services
.service('ContactService', ['$http', function ($http) {

        this.getContacts = function() {
           return $http.get('ContactList.json')
            .success(function (data) {
                return data;
            })
            .error(function(err) {
              console.log('Fail to get contacts.');
            })
        }
}])

// controllers
.controller('navCtrl', function ($scope) {
  $scope.nav = {
    navItems: ['home','add'],
    selectedIndex: 0,
    navClick: function ($index) {
      $scope.nav.selectedIndex = $index;
    }
  };
})


.controller('homeCtrl', function ($scope,ContactService){

    ContactService.getContacts().then(function (data) {
    $scope.contacts = angular.fromJson(data.data);
})


  $scope.removeContact = function (item) {
    var index = $scope.contacts.indexOf(item);
    $scope.contacts.splice(index, 1);
    $scope.removed = 'Contact successfully removed.';
  }
})

.controller('contactInfoCtrl', function ($scope, $routeParams, ContactService){
  var index = $routeParams.contact_index;
  ContactService.getContacts().then(function (data) {
    $scope.contacts = angular.fromJson(data.data);
    console.log($scope.contacts);

  var index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[index];

  });
  // console.log($scope.contacts);
})

.controller('addContactCtrl', function ($scope, $location) {
  //needed to show the correct button on the contact form
  $scope.path = $location.path();

  $scope.addContact = function () {
    var contact = $scope.currentContact;
    contact.id = $scope.contacts.length;
    $scope.contacts.push(contact);
  };

})

.controller('editContactCtrl', function ($scope, $routeParams){
  $scope.index = $routeParams.contact_index;
  $scope.currentContact = $scope.contacts[$scope.index];
})

// directives
.directive('contact', function () {
  return { 
    restrict: 'E',
    replace: true,
    scope : true,
    templateUrl: 'contact.html'
  }
});




